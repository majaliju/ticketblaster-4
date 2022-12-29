Rails.application.routes.draw do
  #& Defines the root path route ("/")
  #& root "articles#index"

  ##~ FOR ARTIST and CONCERTS GET/CREATIONS
  #& to get the artists and concerts, respectively
  get '/artists', to: "artists#index"
  get '/concerts', to: "concerts#index"
   #& to create a new artist and new concert, respectively
  post '/new_artist', to: "artists#create"
  post '/new_concert', to: "concerts#create"


  # #& get info about the artist's upcoming shows
  # get '/upcoming_shows', to: "artists#upcoming_shows"
  # # set it to where if the dates are after today's date then pull these concerts


  ##~ FOR THE POSTS GET/CREATION/EDITS/DELETION
  get '/posts', to: "posts#index"
  post '/new_post', to: "posts#create"
  patch '/update_post/:id', to: "posts#update"
  delete '/delete_post/:id', to: "posts#destroy"

  ##~ THE LOGIN/LOGOUT ROUTES
  #& to create a new user outright
  post "/new_user", to: "users#create"
  #& to login our user
  post "/login", to: "sessions#create"
  #& to keep the user logged in
  get "/me", to: "users#show"
  #& to log the user out
  delete "/logout", to: "sessions#destroy"

  #& show all the users
  get "/users", to: "users#index"

  ##~ SESSION & COOKIES INFO
  #& shows session_id and sessions info
  get "/show_session", to: "application#show_session"
  #& displays cookies
  get "/cookies", to: "application#show_cookies"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
