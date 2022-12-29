class ConcertsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # ## does this go within ConcertsController or ArtistsController?
  # def upcoming_shows
  #   ## define a method that shows the upcoming shows 
  #   ## shows = []
  #   ## if the_show is after today's date, then shows << the_show
  # end

  def index
    concerts = Concert.all
    render json: concerts
  end

  def show
    concert = Concert.find_by!(id: params[:id])
    render json: concert, status: 200
  end

  def create
    byebug
    concert = Concert.create!(new_concert_params)
  byebug
    render json: concert, status: 201
  end

  private

  def new_concert_params
    params.permit(:artist_id, :date, :image, :location)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { error: invalid.message }, status: :not_found
  end
end
