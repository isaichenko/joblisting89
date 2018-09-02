class FollowersController < ApplicationController
  def following_list
    @companies = current_user.all_following
  end

  def follow_unfollow
    if current_user.following?(company)
      current_user.stop_following(company)
      flash[:notice] = "You have successfully unfollowed #{company.title}"
      CompanyMailer.follow_unfollow_to_user(current_user.email, 'UnFollowed', company.title).deliver_now
      CompanyMailer.follow_unfollow_to_company(company.user.email, 'UnFollowed').deliver_now
    else
      current_user.follow(company)
      flash[:notice] = "You are now following #{company.title}"
      CompanyMailer.follow_unfollow_to_user(current_user.email, 'Followed', company.title).deliver_now
      CompanyMailer.follow_unfollow_to_company(company.user.email, 'Followed').deliver_now
    end
    redirect_back(fallback_location: following_list_path)
  end

  private
  def company
    Company.find(params[:id])
  end

end
