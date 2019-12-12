class UserThing < ApplicationRecord
  validates_uniqueness_of :thing_id, scope: :user_id

  belongs_to :user
  belongs_to :thing
end