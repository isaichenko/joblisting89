module ApplicationHelper
  def active? path
		"current" if current_page?(path)
	end

  def interface_button
    if current_user.interface == "jobseeker"
      interface_name = "Recruiter"
    else
      interface_name = "Jobseeker"
    end
  end

  def image_generator(height:, width:)
    "http://via.placeholder.com/#{height}x#{width}"
  end

  def placeholder_img img, type
    if img.model.class.name == "Resume"
      if img.model.profile_pic?
        img
      else type == 'logo'
        image_generator(height: '300', width: '300')
      end
    else
      if img.model.logo?
        img
      else type == 'logo'
        image_generator(height: '300', width: '300')
      end
    end

  end

  # Count of jobs that applies by jobseeker (from invite or by self)
  def applied_count(job)
    job.applied_jobs.where(status: 0).count +
    job.applied_jobs.where(status: 3).count
  end

  def not_aplied_count(job)
    job.applied_jobs.where.not(status: 0).count - 
    job.applied_jobs.where(status: 3).count
  end

  # Bages for status
  def status_badge status
    status_span_generator status
  end

  #check is filter param is hidden
  def is_hidden?(checked, i)
    count_show ||= 5
    !checked && ((i + 1) > count_show)
  end

  # For comment
  def comment
  end

  def convert_time time
    time.strftime("%Y-%m-%dT%H:%M")
  end

  # def previous_url
  #   URI(request.referer || '').path
  # end

  # def save_my_previous_url
  #   session[:my_previous_url] = URI(request.referer || '').path
  # end

  def is_following(company)
    if user_signed_in?
      if current_user.following?(company)
        return 'UnFollow'
      else
        return 'Follow'
      end
    else
      return 'Follow'
    end
  end

  def company_followers
    if user_signed_in? and current_user.companies.present?
      "#{current_user.companies.first.followers_count} Followers "
    end
  end

  # Header image depending interface
  def header_image
    if user_signed_in?
      if current_user.interface == 'recruiter'
        'header-image-recruiter'
      else
        'header-image-jobseeker'
      end
    else
      'header-image-non-login'
    end
  end

  private

    def status_span_generator status
      case status
      when 'submitted'
        content_tag(:span, status.titleize, class: 'badge badge-primary')
      when 'applied'
        content_tag(:span, status.titleize, class: 'badge badge-success')
      when 'declined'
        content_tag(:span, status.titleize, class: 'badge badge-danger')
      when 'applied_by_self'
        content_tag(:span, status.titleize, class: 'badge badge-warning')
      end
    end

end
