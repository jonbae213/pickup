# == Schema Information
#
# Table name: things
#
#  id         :bigint           not null, primary key
#  hobby_id   :bigint           not null
#  name       :string           not null
#  price      :integer          not null
#  deadline   :date             not null
#  desription :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Thing < ApplicationRecord
  validates :name, :price, :description, presence: true
  validates :name, uniqueness: true

  belongs_to :hobby
end
