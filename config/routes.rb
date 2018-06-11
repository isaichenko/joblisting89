Rails.application.routes.draw do
  resources :jobs
  devise_for :users
  get 'dashboard', to: 'pages#dashboard'
  get 'job_post', to: 'pages#job_post'
	root to: "pages#home"
end
