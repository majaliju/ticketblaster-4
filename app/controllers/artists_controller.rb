class ArtistsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  
  def index
    artists = Artist.all
    render json: artists
  end

  def show
    artist = Artist.find_by!(id: params[:id])
    render json: artist, status: 200
  end

  def create
    artist = Artist.create!(new_artist_params)
    render json: artist, status: 201
  end


  private

  def new_artist_params
    params.permit(:name, :image, :genre)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { error: invalid.message }, status: :not_found
  end
end
