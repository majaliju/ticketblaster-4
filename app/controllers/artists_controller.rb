class ArtistsController < ApplicationController

  def upcoming_shows
    ## define a method that shows the upcoming shows for this artist
  end
  
  def index
    artists = Artist.all
    render json: artists
  end

  def show
    artist = Artist.find_by!(id: params[:id])
    render json: artist, status: 200
  end

end
