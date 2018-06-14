User.create!(email: "test@test.com", password: "123123", password_confirmation: "123123")
User.create!(email: "test2@test.com", password: "123123", password_confirmation: "123123")
User.create!(email: "test3@test.com", password: "123123", password_confirmation: "123123")

JobArea.create!(title: "Engineering")
JobArea.create!(title: "Sales and Marketing")
JobArea.create!(title: "Accounting and Finance")
JobArea.create!(title: "Information Technology")
JobArea.create!(title: "Human Resources")
JobArea.create!(title: "Legal")
JobArea.create!(title: "Logistic")
JobArea.create!(title: "Supply Chain")
JobArea.create!(title: "Procurement")
JobArea.create!(title: "Project Management")

JobType.create!(title: "full time")
JobType.create!(title: "part time")
JobType.create!(title: "temporary")
JobType.create!(title: "contract")
JobType.create!(title: "internship")
JobType.create!(title: "commission")
JobType.create!(title: "volunteer")
JobType.create!(title: "permanent")

Education.create!(title: 'GCE "O" Level or equivalent')
Education.create!(title: "Professional Qualification or Diploma")
Education.create!(title: "Bachelor's")
Education.create!(title: "Master's")
Education.create!(title: "Doctorate")

Job.create!(title: "First", job_type_id: 1, job_area_id: 1, salary_min: 500, salary_max: 1500, hires: 1, description: "Some description", email: "seed@example.com", address: "Some Address", experience: 3, education_id: 1, user_id: 1)
Job.create!(title: "Second", job_type_id: 2, job_area_id: 2, salary_min: 100, salary_max: 2500, hires: 2, description: "Some description", email: "seed@example.com", address: "Some Address", experience: 1, education_id: 2, user_id: 1)
Job.create!(title: "Interesting", job_type_id: 3, job_area_id: 3, salary_min: 1500, salary_max: 1500, hires: 1, description: "Some description", email: "seed@example.com", address: "Some Address", experience: 2, education_id: 3, user_id: 1)
Job.create!(title: "Super", job_type_id: 4, job_area_id: 4, salary_min: 1500, salary_max: 3500, hires: 1, description: "Some description", email: "seed@example.com", address: "Some Address", experience: 4, education_id: 4, user_id: 2)
Job.create!(title: "Nice", job_type_id: 5, job_area_id: 5, salary_min: 4500, salary_max: 5000, hires: 3, description: "Some description", email: "seed@example.com", address: "Some Address", experience: 1, education_id: 5, user_id: 2)

Company.create!(title: "Amazon", user_id: 1)
Company.create!(title: "Google", user_id: 2)
Company.create!(title: "NBA", user_id: 3)