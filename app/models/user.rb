# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  full_name       :string           default("")
#  email           :string           not null
#  aboutme         :text             default("")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :password_digest, :session_token, :email, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  
  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password) 
    @user = User.find_by({ email: email })
    return @user if @user && @user.is_password?(password)
    nil
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def is_password?(pw)
    bcrypt = BCrypt::Password.new(self.password_digest)
    bcrypt.is_password?(pw)
  end
  
  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw);
    self.password_digest
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end


end
