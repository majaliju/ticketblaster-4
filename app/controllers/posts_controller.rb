class PostsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find_by!(id: params[:id])
    render json: post, status: 200
  end


  def create
    post = Post.create!(new_post_params)
    render json: post, status: 201
  end


  def update
    post = Post.find_by!(id: params[:id])
    if session[:user_id] === post[:user_id]
      post.update!(
        body: params[:body],
        tickets: params[:tickets]
      )
      render json: post, status: 200
    end 
  end
        

  def destroy
    post = Post.find_by!(id: params[:id])
    if session[:user_id] === post[:user_id]
      post.destroy
      head :no_content
    end
  end

  private

  def new_post_params
    params.permit(:body, :for_sale, :tickets, :concert_id, :user_id)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { error: invalid.message }, status: :not_found
  end

end


  # # original write-up for create
  # def create
  #   post = Post.create!(new_post_params)

  #   if post.valid? 
  #     render json: post, status: 200
  #   else
  #     render json: { errors: post.errors }, status: :unprocessable_entity
  #   end
  # end


  # def update
  #   post = Post.find_by(id: params[:id])
  #   user = User.find_by(id: session[:user_id])
  #   if session[:user_id] === params[:user_id]
  #     post.update(
  #       comment_body: params[:comment_body],
  #       tickets: params[:tickets]
  #     )
  #     render json: post, status: 200
  #     end 
  #   end