# == Schema Information
#
# Table name: user_hobbies
#
#  id         :bigint           not null, primary key
#  hobby_id   :bigint           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserHobby < ApplicationRecord
  validates_uniqueness_of :hobby_id, scope: :user_id

  belongs_to :user
  belongs_to :hobby
end
