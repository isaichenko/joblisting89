class CompanyMailer < ApplicationMailer
  default from: '"Support" <support@joblisting88.com>'
  layout 'mailer'

  def follow_unfollow_to_user(email, type, company)
    @message = "You Just #{type} #{company}"
    mail(to: email, subject: "#{type} Company")
  end

  def follow_unfollow_to_company(email, type)
    @message = "#{email} is #{type} your company"
    mail(to: email, subject: "#{type} Company")
  end

  def new_job_posted_by_company(email,job, company)
    @message = "New Job #{job.title} posted by #{company}"
    mail(to: email, subject: "New Job by #{company}")
  end

end
