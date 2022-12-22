class SessionsController < ApplicationController
  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


  ## logs in the user & cross-checks if the password is correct
  def create
    user = User.find_by!(username: params[:username]) ## it worked as User.find_by -- if User.find_by doesn't work, change this back
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    # the original else handling
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  # delete the user from the session
  def destroy
    session.delete :user_id
    head :no_content
  end

  # def render_unprocessable_entity_response(invalid)
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unauthorized
  # end

end
