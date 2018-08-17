class UsersController < ApplicationController
	def toggle_interface
    user = current_user
    if user.jobseeker?
      user.recruiter!
    elsif user.recruiter?
      user.jobseeker!
    end

    redirect_to root_path, notice: 'User interface has been changed.'
  end

  def change_action
    @user = User.find(params[:id])
    @status = params[:status]
    @path = params[:path]
    @redirect_path = (@path == 'job_seeker') ? manage_jobseeker_path : manage_recruiter_path 
    if @status == 'delete'
      @user.destroy
      respond_to do |format|
        format.html { redirect_to @redirect_path, notice: 'The User was removed.' }
      end
    elsif @status == 'suspend'
      if @user.update(:status => 'suspended')
        format.html { redirect_to @redirect_path, notice: 'The User was suspended.' }
      else
        format.html { redirect_to @redirect_path, notice: 'The User status is not updated.' }
      end
    elsif @status == 'lift_suspend'
      if @user.update(:status => 'active')
        format.html { redirect_to @redirect_path, notice: 'The User status was active.' }
      else
        format.html { redirect_to @redirect_path, notice: 'The User status is not updated.' }
      end
    end
  end
end
