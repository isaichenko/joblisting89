class JobsController < ApplicationController
  before_action :set_job, only: [:edit, :show, :update, :destroy, :applicants, :invites]

  def index
    if user_signed_in?
      @jobs = Job.posts_by(current_user).order('created_at DESC')
    else
      redirect_to root_path, notice: 'You do not have permission for this action!'
    end
  end
# show jobs
  def show_jobs
    if user_signed_in?
      user = User.find(params[:id])
      @jobs = Job.posts_by(user)
      @company = user.company_name
      render :template => 'jobs/index', :locals => {:jobs => @jobs, :company => @company}
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
      #invite_resumes = @job.applied_jobs.where.not(status: 0) && @job.applied_jobs.where.not(status: 3)
      invite_resumes = @job.applied_jobs.where(status: 1) + @job.applied_jobs.where(status: 2)
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
        # send the new job titlew for admin approval
        if !JobTitle.where(title: @job.title).present?
          JobTitle.create(title: @job.title, status: false, user_id: current_user.id)
        end
        format.html {
          redirect_to controller: 'checkout', action: 'show', id: @job.id
        }
        current_user.companies.first.followers.each do |user|
          CompanyMailer.new_job_posted_by_company(user.email,@job, current_user.companies.first.title).deliver_now
        end
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
    subscribe_job = @job
    respond_to do |format|
      if @job.update(job_params)
        # send the new job titlew for admin approval
        if !JobTitle.where(title: @job.title).present?
          JobTitle.create(title: @job.title, status: false, user_id: current_user.id)
        end
        if subscribe_job.subscribed?
          format.html { redirect_to jobs_path, notice: 'The Job was successfully updated.' }
        else
          format.html { redirect_to controller: 'checkout', action: 'show', id: @job.id, notice: 'Your subscription expired! Please select payment plan again!'}
        end
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

  # Set spotlight to Jobs
  def change_spotlight
    @job = Job.find(params[:id])
    @spotlight = params[:spotlight]

    if @spotlight == 'delete'
      @job.destroy
      @notice = 'The Job was removed.'
    elsif @spotlight == 'remove'
      if @job.update(:spotlight => false)
        @notice = 'The Job was removed from Spotlight.'
      else
        @notice = 'The Job Spotlight is not updated.'
      end
    elsif @spotlight == 'add'
      if @job.update(:spotlight => true)
        @notice = 'The Job was add to Spotlight.'
      else
        #notice: 'The User status is not updated.'
        @notice = 'The Job Spotlight is not updated.'
      end
    end

    #refresh page
    respond_to do |format|
      format.js { render inline: "location.reload();", notice: @notice }
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
                                  :user_id,
                                  :plan_id
                                  )
    end
end
