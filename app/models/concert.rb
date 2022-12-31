class Concert < ApplicationRecord
  belongs_to :artist
  ## trying this out to bypass the artist.id issue
  validates :artist, presence: true
  
  has_many :posts
  has_many :users, -> { distinct }, through: :posts

  
  validates :location
  validates :image
  validates :image


end
