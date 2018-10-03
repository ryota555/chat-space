Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :messages, only: [:index] do
  resources :users, only: [:edit, :update]
  end
end
