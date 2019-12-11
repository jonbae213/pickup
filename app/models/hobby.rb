# == Schema Information
#
# Table name: hobbies
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#

class Hobby < ApplicationRecord
  validates :name, :description, presence: true
  validates :name, uniqueness: true

  has_many :things
end
