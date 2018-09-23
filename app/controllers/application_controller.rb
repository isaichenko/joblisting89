class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
  #protect_from_forgery prepend: true
  include DeviseWhitelist

  def after_sign_in_path_for(resource)
  	root_path
	end
end
