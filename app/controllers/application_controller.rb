class ApplicationController < ActionController::API
  include ActionController::Cookies

  def show_session
    render json: session
  end

  def show_cookies
    cookies[:cookies_tester] ||= "Cookies work!"
    cookies[:user_id] = session[:user_id]
    render json: { cookies: cookies.to_hash }
  end

end
