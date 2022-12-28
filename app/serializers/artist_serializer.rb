class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :genre


  has_many :concerts, serializer: ConcertSerializer
end
