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

  # ## made this one to not-render duplicates but still rendered duplicates
  # def create
  #   ## links the proper user to the post
  #   correct_user = User.find_by!(id: params[:user_id])

  #   ## links the proper concert to the post
  #   correct_concert = Concert.find_by!(id: params[:concert_id])

  #   newPost = Post.create!(
  #     id: params[:id],
  #     body: params[:body],
  #     tickets: params[:tickets],
  #     for_sale: params[:for_sale],
  #     concert_id: correct_concert.id,
  #     user_id: correct_user.id
  #   )
  #   render json: newPost, status: 201
  # end

  def update
    post = Post.find_by!(id: params[:id])
    if session[:user_id] === post[:user_id]
      ## potential cross-check for if only body, or only tickets if being updated
      ## but also seems irrelevant
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
    params.permit(:concert_id, :user_id, :for_sale, :tickets, :body)
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