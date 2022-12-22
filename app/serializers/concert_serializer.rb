class ConcertSerializer < ActiveModel::Serializer
  attributes :date, :location, :artist_id
  
  belongs_to :artist, serializer: ArtistSerializer
end
