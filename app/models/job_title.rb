class JobTitle < ApplicationRecord
  has_ancestry

  belongs_to :user
  
  
  paginates_per 5
  
  validates_presence_of :title
  validates :title, uniqueness: true
  
  scope :getMainTitles, -> { where(status: true) }
  

  
  def calc_salary

    min_salary_array = []
    max_salary_array = []
    min_salary_from_job_seeker = []
    max_salary_from_job_seeker = []
    total_salaries_from_job_seeker = []
    
    main_category = JobTitle.where(id: id).first.root
    sub_categories = main_category.children.pluck(:title)
    all_titles = sub_categories << main_category.title
    
    titles_from_recuriter = Job.where(title: all_titles)
    titles_from_job_seeker = WorkExperience.where(job_title: all_titles)
    if titles_from_recuriter.present?
      min_salary_array = titles_from_recuriter.pluck(:salary_min).compact
      max_salary_array = titles_from_recuriter.pluck(:salary_max).compact  
    end
    
    if titles_from_job_seeker.present?
      salary = titles_from_job_seeker.pluck(:salary).compact
      min_salary_from_job_seeker = [salary.min]
      max_salary_from_job_seeker =  [salary.max]
      total_salaries_from_job_seeker =  min_salary_from_job_seeker + max_salary_from_job_seeker
    end
    
    total_min = min_salary_array + min_salary_from_job_seeker
    total_max = max_salary_array + max_salary_from_job_seeker
    

    min = total_min.sum/total_min.size rescue 0
    max = total_max.sum/total_max.size rescue 0
    
    total = total_min + total_max + total_salaries_from_job_seeker
    
    if total.present?
      avg = total.sum/total.size
    else
      avg = 0
    end
    
    result =  [min, max, avg]
    
    return result
  
  end

end
