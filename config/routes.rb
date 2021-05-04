Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/websites', to: 'homes#index'
  get '/websites/new', to: 'homes#index'
  
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  namespace :api do
    namespace :v1 do
      resources :websites, only: [:index, :create]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
