class Artist < ApplicationRecord
  has_many :concerts
  
  has_many :posts, through: :concerts
  

  validates :name, uniqueness: { case_sensitive: false }
  validates :genre, presence: true
  # validates :image, presence: true
  ## make sure its the proper image style
end
