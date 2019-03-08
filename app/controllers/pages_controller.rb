class PagesController < ApplicationController
  access all: { except: [:settings, :manage_jobseeker, :manage_recruiter, :manage_job_stats, :job_spotlight] }, user: { except: [:settings, :manage_jobseeker, :manage_recruiter, :manage_job_stats, :job_spotlight] }, superadmin: :all
  before_action :set_job_post, only: [:index, :find_resume, :find_company]

  def index; end

  def alljobs
    if search_params.present?
      query = params[:q].presence || '*'
      if Job.first.present?
        @all_jobs = Job.search(query, Job.prepare_search(search_params))
      else
        @all_jobs = Job.all
      end
      @filter_active = true
    else
      if Job.first.present?
        @all_jobs = Job.search('*', Job.prepare_search(search_params))
      else
        @all_jobs = Job.all
      end
    end
  end

  def allcompanies
    if search_params.present?
      query = params[:q].presence || '*'
      if Company.first.present?
        @all_companies = Company.search(query, Company.prepare_search(search_params))
      else
        @all_companies = Company.all
      end
      @filter_active = true
    else
      if Company.first.present?
        @all_companies = Company.search('*', Company.prepare_search(search_params))
      else
        @all_companies = Company.all
      end
    end
  end

  def allresumes
    if search_params.present?
      query = params[:q].presence || '*'
        if Resume.first.present?
          @all_resumes = Resume.search(query, Resume.prepare_search(search_params))
        else
          @all_resumes = Resume.all
        end
      @filter_active = true
    else
      if Resume.first.present?
        @all_resumes = Resume.search('*', Resume.prepare_search(search_params))
      else
        @all_resumes = Resume.all
      end
    end
  end
# Add FAQs and Blogs
  def allfaqs
    @faqs = Faq.getActiveFaqs.order(created_at: :ASC).all()
    @role = user_signed_in? ? (current_user.interface.nil? ? 'admin' : 'user') : 'user'

    render :template => 'faqs/all', :locals => {:faqs => @faqs, :role => @role}
  end

  def allblogs
    @blogs = Blog.all()
    @recent = Blog.last(3)
    @role = user_signed_in? ? (current_user.interface.nil? ? 'admin' : 'user') : 'user'

    render :template => 'blogs/all', :locals => {:blogs => @blogs, :role => @role}

  end

  def allsalaries
    @all_salaries = JobTitle.getMainTitles.order(created_at: :DESC).all
    if params[:query].present?
      #@all_salaries = JobTitle.where('title like ?', "%#{params[:query]}%")
      @all_salaries = JobTitle.where('lower(title) like ?', "%#{(params[:query]).downcase}%")
    end
    @all_salaries = @all_salaries.page params[:page]
  end

  def find_resume; end

  def find_company; end

  def admin
    if !user_signed_in?
    else
      redirect_to root_path, notice: 'You already in the system'
    end
  end

  def settings
    @job_types = JobType.all
    @job_areas = JobArea.all
  end


  def plans
    @plans = Plan.all
  end

  def manage_job_stats
    @job_titles = JobTitle.where(status: true).all
  end

# Show Jobseeker, Recruiter, Blog, FAQ for admin
  def manage_jobseeker
    # @job_seekers = User.where(interface: 1).order(created_at: :DESC).all
    @job_seekers = User.job_seekers.page params[:page]
    @type = 'JobSeeker'
  end

  def manage_recruiter
    # @recruiters = User.where(interface: 0).order(created_at: :DESC).all
    @recruiters = User.recruiters.page params[:page]
    @type = 'Recruiter'
  end

# Job Spotlight
  def job_spotlight
    @jobs = Job.all.order(id: :asc).page params[:page]
    @spotlight_jobs = Job.spotlight
    @type = 'Job'
  end

# Add FAQ
  def add_faq
  end

  def alert
    @keywords = Keyword.set_by(current_user)
  end

  def subscribed_jobs
    @keywords = Keyword.set_by(current_user)
    if @keywords.blank?
      redirect_to(alert_path, alert: "Empty keywords! Go to Alert Job!") and return
    else
      @parameter = @keywords[0].title.downcase
      @results = Job.all.where("lower(title) LIKE :search", search: "%#{@parameter}%")
    end
  end

  def search_params
    params.permit(:q, :address, :sort_by, :page, experience: [], job_type: [], education: [], job_title: [], city: [], industry: [], reviews: [], title: [])
  end

  def set_job_post
    @recent_jobs = Job.last(5)
    @recent_posts = Blog.published.last(3)
    #@recent_posts = Blog.last(3)
    @spotlight_jobs = Job.spotlight
  end

end
