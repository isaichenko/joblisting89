class JobsController < ApplicationController
  before_action :set_job, only: [:edit, :show, :update, :destroy, :applicants, :invites]

  def index
    if user_signed_in?
      @jobs = Job.posts_by(current_user)
    else
      redirect_to root_path, notice: 'You do not have permission for this action!'
    end
  end
# show jobs
  def show_jobs
    if user_signed_in?
      user = User.find(params[:id])
      @jobs = Job.posts_by(user)
      render :template => 'jobs/index', :locals => {:jobs => @jobs}
    else
      redirect_to root_path, notice: 'You do not have permission for this action!'
    end
  end
  
  def bookmarked_jobs
    if user_signed_in?
      @bookmarked_jobs = current_user.bookmarked_by_user_jobs
    else
      redirect_to root_path, notice: 'You do not have permission for this action!'
    end
  end

  def applied_jobs
    current_user = User.find(params[:id])
    puts current_user.email
    if user_signed_in? && current_user.resumes.count > 0
      @applied_jobs = current_user.resumes[0].jobs
    else
      redirect_to root_path, notice: 'You do not have Applied Jobs!'
    end
  end

  def applicants
    if user_signed_in? && @job.user_id == current_user.id
      applied_by_self_resumes = @job.applied_jobs.applied_by_self
      applied_resumes = @job.applied_jobs.applied
      @resumes = []
      applied_resumes.each do |r|
        @resumes << Resume.find(r.resume_id)
      end
      applied_by_self_resumes.each do |r|
        @resumes << Resume.find(r.resume_id)
      end
    else
      redirect_to root_path, notice: 'You do not have permission for this action!'
    end
  end

  def invites
    if user_signed_in? && @job.user_id == current_user.id
      invite_resumes = @job.applied_jobs.where.not(status: 0)
      @resumes = []
      invite_resumes.each do |r|
        @resumes << Resume.find(r.resume_id)
      end
    else
      redirect_to root_path, notice: 'You do not have permission for this action!'
    end
  end

  def new
    if user_signed_in?
      if current_user.companies.count > 0
        @job = Job.new
      else
        redirect_to new_company_path, notice: 'You must have the company before creating Job!'
      end
    else
      redirect_to alljobs_path, notice: 'You do not have permission for this action!'
    end
  end

  def create
    @job = Job.new(job_params)
    @job.user_id = current_user.id

    respond_to do |format|
      if @job.save
        format.html { redirect_to jobs_path, notice: 'Your Job was created.' }
      else
        format.html { render :new }
      end
    end
  end

  def edit
    if user_signed_in? && @job.user_id == current_user.id
    else
      redirect_to alljobs_path, notice: 'You do not have permission for this action!'
    end
  end

  def update
    respond_to do |format|
      if @job.update(job_params)
        format.html { redirect_to jobs_path, notice: 'The Job was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def show
    respond_to do |format|
      format.html {}
      format.js
    end
  end

  def destroy
    if @job.user_id == current_user.id
      @job.destroy
      respond_to do |format|
        format.html { redirect_to jobs_url, notice: 'The Job was removed.' }
      end
    else
      redirect_to jobs_path, notice: 'You do not have permission for this action!'
    end
  end

  private
    def set_job
      @job = Job.find(params[:id])
    end

    def job_params
      params.require(:job).permit(:title,
                                  :salary_min,
                                  :salary_max,
                                  :hires,
                                  :description,
                                  :email,
                                  :address,
                                  :experience,
                                  :job_type_id,
                                  :job_area_id,
                                  :education_id,
                                  :expiry_date,
                                  :user_id)
    end
end
