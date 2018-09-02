class NewsFeedController < ApplicationController
  def news_feed
    followings = current_user.all_following
    @jobs = Job.where(user_id: followings.pluck(:user_id))
  end
end
