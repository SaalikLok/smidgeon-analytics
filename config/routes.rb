Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/user' => "homes#authenticated", :as => :user_root
  get '/websites', to: 'homes#authenticated'
  get '/websites/new', to: 'homes#authenticated'
  get '/websites/:id', to: 'homes#authenticated'
  
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  namespace :api do
    namespace :v1 do
      resources :visits, only: [:create]
      resources :websites, only: [:index, :create, :show, :destroy]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
