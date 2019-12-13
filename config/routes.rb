Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update] 
    resources :things, only: [:index, :show] do
      post '/user_things', to: 'things#save'
      delete '/user_things', to: 'things#unsave'
    end
    resources :hobbies, only: [:index] do 
      post '/user_hobbies', to: 'hobbies#follow'
      delete '/user_hobbies', to: 'hobbies#unfollow'
    end
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:create, :destroy, :update]
  end

end
