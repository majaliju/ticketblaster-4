class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :artist_id
  
  belongs_to :artist, serializer: ArtistSerializer
end
