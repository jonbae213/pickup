class User < ApplicationRecord
  validates :password_digest, :session_token, :email, :full_name, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password) 
    @user = User.find_by_credentials({ email: email })
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
