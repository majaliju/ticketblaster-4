class Concert < ApplicationRecord
  belongs_to :artist
  
  has_many :posts
  has_many :users, -> { distinct }, through: :posts

end
