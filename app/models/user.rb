class User < ApplicationRecord
  ############################################################################################
  ## PeterGate Roles                                                                        ##
  ## The :user role is added by default and shouldn't be included in this list.             ##
  ## The :root_admin can access any page regardless of access settings. Use with caution!   ##
  ## The multiple option can be set to true if you need users to have multiple roles.       ##
  petergate(roles: [:superadmin], multiple: false)                                      ##
  ############################################################################################


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook, :google_oauth2]
  has_many :jobs, dependent: :destroy
  has_many :companies, dependent: :destroy
  has_many :resumes, dependent: :destroy

  #has_many :jobs_users
  #has_many :jobs, through: :jobs_users

  #has_many :resumes_users
  #has_many :resumes, through: :resumes_users


  #before_create :set_default_role

  enum interface: { recruiter: 0, jobseeker: 1 }

  #link to sign up with interface start
  attr_accessor :initial_interface

  def initial_interface=(interface_name)
      @initial_interface = interface_name
      if interface_name == 'jobseeker'
        self.jobseeker!
      else
        self.recruiter!
      end
  end

  def initial_interface
      @initial_interface
  end
  #finish

  def self.new_with_session(params, session)
  	super.tap do |user|
    	if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
      	user.email = data["email"] if user.email.blank?
    	end
  	end
	end

	def self.from_omniauth(auth)
  	where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    	user.email = auth.info.email
      user.provider = auth.provider
      user.uid = auth.uid
    	user.password = Devise.friendly_token[0,20]
    	user.name = auth.info.name
  	end
	end

  #private
  #  def set_default_role
  #    self.roles << :jobseeker
  #    self.roles << :recruiter
  #  end
end
