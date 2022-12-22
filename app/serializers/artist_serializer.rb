class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :genre


  has_many :concerts, serializer: ConcertSerializer
  has_many :posts, through: :concerts, serializer: PostSerializer
end
