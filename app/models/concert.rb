class Concert < ApplicationRecord
  belongs_to :artist
  #
  
  has_many :posts
  has_many :users, -> { distinct }, through: :posts

  
  validates :location, presence: true
  validates :venue_image, presence: true
 
  


end
