class ConcertsController < ApplicationController
  def index
    concerts = Concert.all
    render json: concerts
  end

  def show
    concert = Concert.find_by(id: params[:id])
    render json: concert, status: 200
  end
end
