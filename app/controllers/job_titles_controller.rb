class JobTitlesController < ApplicationController
  access all: [], user: [], superadmin: :all
  before_action :set_job_title, only: [:edit, :show, :update, :destroy, :approve_action, :link_title]

  def new
    @job_title = JobTitle.new
  end

  def create
    @job_title = JobTitle.new(job_title_params)
    @job_title.user_id = current_user.id

    respond_to do |format|
      if @job_title.save
        format.html { redirect_to manage_job_stats_path, notice: 'Your Job Title was created.' }
      else
        format.html { render :new }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @job_title.update(job_title_params)
        format.html { redirect_to manage_job_stats_path, notice: 'The Job Title was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def show
  end

  def destroy
    @job_title.destroy
    respond_to do |format|
      format.html { redirect_to manage_job_stats_path, notice: 'The Job Title was removed.' }
    end
  end

  def approve_action
    @status = params[:status]
    @approved_job_titles = JobTitle.where(status: true)
    if @status == 'approve'
      @job_title.update(:status => true )
      @notice = 'The Job Title is approved.'
    elsif @status == 'cancel'
      @job_title.destroy
      @notice = 'The Job Title is cancelled.'
    end

    respond_to do |format|
      format.html { redirect_to manage_job_stats_path, notice: @notice }
      format.js{}
    end
  end

  def link_title
    @child_id = params[:id]
    @parent_id = params[:parent_id]
    @parent_title = JobTitle.find(params[:parent_id])
    @job_title.parent_id = @parent_id
    @job_title.status = true
    if @job_title.save
      @notice = "#{@job_title.title} is linked with #{@parent_title.title}"
    else
      @notice = "Error"
    end
    respond_to do |format|
      format.html { redirect_to manage_job_stats_path, notice: @notice }
    end

  end

  private
    def set_job_title
      @job_title = JobTitle.find(params[:id])
    end

    def job_title_params
      params.require(:job_title).permit(:title, :user_id, :status, :ancestry)
    end
end
