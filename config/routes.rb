Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show] do
      resources :hobbies, only: [:show]
    end
    resource :session, only: [:create, :destroy]
    resources :hobbies, only: [:index, :show] do 
      resources :things, only: [:index]
    end
    resources :things, only: [:index, :show]
  end

end
