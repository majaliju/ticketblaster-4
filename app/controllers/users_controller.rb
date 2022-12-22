class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    users = User.all
    render json: users
  end

  ## get '/me'
  def show
    user = User.find_by!(id: session[:user_id]) ## changed it to User.find_by! for it to work
    render json: user, status: 200
  end

  def create
    user = User.create!(signup_user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

# # the original show
#   def show
#     user = User.find_by(id: session[:user_id])
#     if user
#       render json: user, status: 200
#     else
#       render json: user.errors.full_messages, status: :unprocessable_entity
#     end
#   end

#   # the original create
#   def create
#     user = User.create(signup_user_params)

#     if user.valid?
#       session[:user_id] = user.id
#       render json: user, status: :created
#     else
#       render json: user.errors.full_messages, status: :unprocessable_entity
#     end
#   end

  # # update a specific user
  # def update
  #   if user.update(user_params)
  #     render json: user
  #   else
  #     render json: user.errors, status: :unprocessable_entity
  #   end
  # end

  # # delete a specific user
  # def destroy
  #   user.destroy
  # end

  private


  def signup_user_params
    params.permit(:username, :password, :password_confirmation, :email)
  end


  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { error: invalid.message }, status: :not_found
  end
end
