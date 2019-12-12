class Review < ApplicationRecord
  validates :body, :stars, presence: true
  validates :stars, inclusion: { in: 0..5 }

  belongs_to :user
  belongs_to :thing
end