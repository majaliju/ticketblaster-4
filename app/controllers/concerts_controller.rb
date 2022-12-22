class ConcertsController < ApplicationController


  ## does this go within ConcertsController or ArtistsController?
  def upcoming_shows
    ## define a method that shows the upcoming shows 
    ## shows = []
    ## if the_show is after today's date, then shows << the_show
  end

  def index
    concerts = Concert.all
    render json: concerts
  end

  def show
    concert = Concert.find_by!(id: params[:id])
    render json: concert, status: 200
  end
end
