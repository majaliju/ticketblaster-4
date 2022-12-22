class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date, :location
  
  belongs_to :artist, serializer: ArtistSerializer
end
