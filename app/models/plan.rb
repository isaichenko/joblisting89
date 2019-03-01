class Plan < ApplicationRecord
  has_many :jobs
  has_many :orders
  belongs_to :currency

  STATUS_ACTIVE = 'Active'.freeze
  STATUS_EXPIRED = 'Expired'.freeze

  enum status: {
      draft: 0,
      expired: 1,
      actibe: 2
  }

  validates :name, :duration_days, :price, :currency, :presence => { :message => 'cannot be blank' }

  before_save :set_date_expiration

  def expired?
    Date.parse(self.duration.strftime('%d %B %Y')) < Date.today
  end

  def set_date_expiration
    self.duration = Date.today + self.duration_days.days
  end

  def destroy
    unless jobs.count == 0
      return false
    else
      super
    end
  end


end
