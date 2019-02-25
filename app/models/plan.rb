class Plan < ApplicationRecord
  has_many :jobs
  belongs_to :currency

  STATUS_ACTIVE = 'Active'.freeze
  STATUS_EXPIRED = 'Expired'.freeze

  before_save :set_date_expiration

  def expired?
    Date.parse(self.duration.strftime('%d %B %Y')) < Date.today
  end

  def set_date_expiration
    self.duration = Date.today + self.duration_days.days
  end

end
