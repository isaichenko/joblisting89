module ApplicationHelper
  def active? path
		"active" if current_page?(path)
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
    job.applied_jobs.where(status: 0).count
  end

  def not_aplied_count(job)
    job.applied_jobs.where.not(status: 0).count
  end
end
