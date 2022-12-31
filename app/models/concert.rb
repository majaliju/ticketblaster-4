class Concert < ApplicationRecord
  belongs_to :artist
  
  has_many :posts
  has_many :users, -> { distinct }, through: :posts

  validates :name, presence: true
  validates :tickets, numericality: { greater_than: 0, only_integer: true }

end
