class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :image, :artist_id
  
  belongs_to :artist, serializer: ArtistSerializer
  has_many :posts, serializer: PostSerializer
  # has_many :users, through: :posts, serializer: UserSerializer do object.users.distinct end
  has_many :users, through: :posts, serializer: UserSerializer 
end
