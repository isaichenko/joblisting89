class Job < ApplicationRecord
  validates_presence_of :title, :salary_min, :salary_max, :hires, :description, :experience, :expiry_date

  JOBS_PER_PAGE = 15
  paginates_per JOBS_PER_PAGE

  belongs_to :user
  belongs_to :job_area
  belongs_to :job_type
  belongs_to :education
  has_many :companies, through: :user
  belongs_to :plan

  has_many :bookmarked_jobs, dependent: :destroy
  has_many :bookmarked_by_users, through: :bookmarked_jobs, source: :user

  has_many :applied_jobs, dependent: :destroy
  has_many :resumes, through: :applied_jobs, source: :resume

  scope :posts_by, ->(user) { where(user_id: user.id) }
  scope :spotlight, -> { where(spotlight: true) }
  scope :paid, -> { where(is_subscribe_payment_plan: true) }

  include JobSearch

  def first_company
    companies.first
  end
end

