class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :image
  
  belongs_to :artist, serializer: ArtistSerializer
end
