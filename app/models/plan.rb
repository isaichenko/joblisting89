class Plan < ApplicationRecord
  has_many :jobs

  STATUS_ACTIVE = 'Active'.freeze
  STATUS_EXPIRED = 'Expired'.freeze

  def expired?
    Date.parse(p.duration.strftime('%d %B %Y')) < Date.today
  end

end
