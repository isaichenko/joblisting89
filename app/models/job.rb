class Job < ApplicationRecord
  validates_presence_of :title, :salary_min, :salary_max, :hires, :description, :experience, :expiry_date

  JOBS_PER_PAGE = 15
  paginates_per JOBS_PER_PAGE

  enum status: {
      prending: 0,
      active: 1,
      expired: 2
  }

  belongs_to :user
  belongs_to :job_area
  belongs_to :job_type
  belongs_to :education
  has_many :companies, through: :user
  belongs_to :plan
  has_many :orders

  has_many :bookmarked_jobs, dependent: :destroy
  has_many :bookmarked_by_users, through: :bookmarked_jobs, source: :user

  has_many :applied_jobs, dependent: :destroy
  has_many :resumes, through: :applied_jobs, source: :resume

  scope :posts_by, ->(user) { where(user_id: user.id) }
  scope :spotlight, -> { where(spotlight: true) }

  scope :subscribed, -> {where(is_subscribe_payment_plan: true)}

  #include Elasticsearch::Model
  #include Elasticsearch::Model::Callbacks

  include JobSearch

  def first_company
    companies.first
  end

  def subscribed?
    order = orders.last
    return (order.subscription_date + self.plan.duration_days.days) >= Date.today if order.present? && self.plan.present?
    return false
  end

end

