class ApplicationMailer < ActionMailer::Base
  default from: "support@joblisting88.com"
  layout 'mailer'
  before_action :set_x_smtpapi

  private

  def set_x_smtpapi
    headers 'X-SMTPAPI' => {
      filters: {
        templates: {
          settings: {
            enable: 1,
            template_id: '74d9616d-13e5-457c-bad9-3a491e752c81'
          }
        }
      }
    }.to_json
  end
end
