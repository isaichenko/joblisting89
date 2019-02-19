Rails.application.routes.draw do


  mount Ckeditor::Engine => '/ckeditor'
  get 'faq/new'

  get 'faq/edit'

  get 'blogs_controller/new'

  get 'blogs_controller/create'

  resources :resumes
  resources :users do
    member do
      get :toggle_interface
    end
  end

  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout' },
  :controllers => { :omniauth_callbacks => "users/omniauth_callbacks"}

  devise_scope :user do
    get "/users/sign_up/:initial_interface" => 'devise/registrations#new', :as => 'new_user_with_interface'
  end

  resources :companies do
    resources :reviews
    member do
      get :follow_unfollow
    end
  end

  resources :jobs
  resources :job_types,   except: :index
  resources :job_areas,   except: :index
  resources :keywords,    except: :index
  resources :job_titles,  except: :index
  resources :plans
# FAQ and Blog
  resources :faqs
  resources :blogs

# Categories, Tags
  resources :categories
  resources :tags

  get     '/alljobs',           to: 'pages#alljobs'
  get     '/allcompanies',      to: 'pages#allcompanies'
  get     '/allresumes',        to: 'pages#allresumes'
  get     '/allsalaries',      to: 'pages#allsalaries', as: :allsalaries
# show fag and blogs
  get     '/allfaqs',           to: 'pages#allfaqs'
  get     '/allblogs',          to: 'pages#allblogs'

  get     '/find_resume',       to: 'pages#find_resume'
  get     '/find_company',      to: 'pages#find_company'
  get     '/admin',             to: 'pages#admin'
  get     '/settings',          to: 'pages#settings'

  get     '/manage-plans' ,            to: 'pages#plans'

  get     '/job_spotlight',     to: 'pages#job_spotlight'
  get     '/change_spotlight/:id/:spotlight', to: 'jobs#change_spotlight', as: :change_spotlight
# Add Jobseeker, Recruiter, Blog, FAQ for adminshow_jobs
  get     '/manage_jobseeker',  to: 'pages#manage_jobseeker'
  get     '/manage_recruiter',  to: 'pages#manage_recruiter'

# Add Fag page
  get     '/add_faq',           to: 'pages#add_faq'
  get     '/add_blog',          to: 'pages#add_blog'

# manage job stats settings
  get     '/manage_job_stats',     to: 'pages#manage_job_stats'

# Show jobs
  get     '/jobs/show_jobs/:id',     to: 'jobs#show_jobs',  as: :show_jobs
# Shange status
  # get     '/users/change_status/:status', to: 'users/'
# Change user action
  get     '/change_action/:id/:status', to: 'users#change_action', as: :change_action
  get     '/alert',             to: 'pages#alert'
  get     '/subscribed_jobs',   to: 'pages#subscribed_jobs'

  get     'bookmark_resume',    to: 'bookmarked_resumes#bookmark_resume'
  delete  'unbookmark_resume',  to: 'bookmarked_resumes#unbookmark_resume'
  get     'bookmarked_resumes', to: 'resumes#bookmarked_resumes'

  get     'bookmark_job',       to: 'bookmarked_jobs#bookmark_job'
  delete  'unbookmark_job',     to: 'bookmarked_jobs#unbookmark_job'
  get     'bookmarked_jobs',    to: 'jobs#bookmarked_jobs'

  get     'jobs/:id/apply_by_self_job',  to: 'applied_jobs#apply_by_self_job', as: :apply_by_self_job
  get     'jobs/:id/apply_job',          to: 'applied_jobs#apply_job',     as: :apply_job
  get     'jobs/:id/decline_job',        to: 'applied_jobs#declined_job',  as: :decline_job
  post    '/resumes/:id/invite_to_job/', to: 'applied_jobs#invite_to_job', as: :invite_to_job

  get     'applied_jobs/:id',         to: 'jobs#applied_jobs', as: 'applied_jobs'
  get     'jobs/:id/applicants/', to: 'jobs#applicants', as: 'job_applicants'
  get     'jobs/:id/invites/',    to: 'jobs#invites', as: 'job_invites'

  #
  post    '/categories/add',      to: 'categories#add'
  #
  post    '/tags/add',            to: 'tags#add'

  # job titles approvals

  get '/approve_action/:id/:status', to: 'job_titles#approve_action', as: :approve_action
  post '/job_titles/:id/link_title/', to: 'job_titles#link_title', as: :link_title

  get     'following_list',       to: 'followers#following_list'
  get     'follow_unfollow',      to: 'followers#follow_unfollow'

  get     'news_feed',            to: 'news_feed#news_feed'

  root to: 'pages#index'

end
