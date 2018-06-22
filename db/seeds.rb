User.create!(email: "test@test.com", password: "123123", password_confirmation: "123123", interface: 0)
User.create!(email: "test2@test.com", password: "123123", password_confirmation: "123123", interface: 0)
User.create!(email: "test3@test.com", password: "123123", password_confirmation: "123123", interface: 1)
User.create!(email: "test4@test.com", password: "123123", password_confirmation: "123123", interface: 1)
User.create!(email: "test5@test.com", password: "123123", password_confirmation: "123123", interface: 1)

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

Company.create!(title: "Amazon", hires_per_year: 5, name: "Bill", phone: "1234567899", country: "USA", city: "Boston", postal_code: "12345", payment_info: "PayPal", about: "We are Great company", why_join_us: "Because we Great!", website: "google.com", industry: "Some Industry", number_of_employee: 150, user_id: 1)
Company.create!(title: "Google", hires_per_year: 15, name: "Smith", phone: "1234567899", country: "Canada", city: "Toronto", postal_code: "12345", payment_info: "PayPal", about: "We are Great company", why_join_us: "Because we Great!", website: "camp.com", industry: "Some Industry", number_of_employee: 50, user_id: 2)
Company.create!(title: "NBA", hires_per_year: 25, name: "Jack", phone: "1234567899", country: "Some Coutry", city: "Some City", postal_code: "12345", payment_info: "PayPal", about: "We are Great company", why_join_us: "Because we Great!", website: "bong.com", industry: "Some Industry", number_of_employee: 15, user_id: 3)

Resume.create!(first_name: "Bill", last_name: "Roger", user_id: 1, status: 1)

WorkExperience.create!(job_title: "RoR Developer", resume_id: 1)

Resume.create!(first_name: "Eugene", last_name: "Aiver", country: "Ukraine", city: "Poltava", contact_information: "clashinua@gmail.com",
	phone: "0991231212", status: "public_resume", degree: "Master", school: "Technical", field_of_study: "Electromechanicl",
	education_country: "Ukraine", education_city: "Poltava", education_start_date: "2002-02-01", education_end_date: "2007-06-01",
	work_experiences_attributes: ({job_title: "System Administrator", company: "UCRF", country: "Ukraine", city: "Poltava", 
		job_type_work_exp: 1, i_currently_work_here: false, start_date: "2007-06-06", end_date: "2014-12-31", years_of_experience: 7,
		less_than_one_year: false, job_description: "Good Job", salary: "400"}), desired_job_title: "RoR Developer", job_type_ids:["", "1", "2"],
	desired_salary_per_month: 2000, desired_salary_per_year: 25000, employement_eligibility: "employment", relocation: 0,
	additional_information_step_4: "I want to find good work",
	skills_attributes: ({title: "Ruby", experience: 1}),
	certifications_attributes: ({title: "Cert", start_date: "2012-02-01", end_date: "2018-05-04", description: "Certificate"}),
	blog_url:" blog.com", personal_homepage: "personal.com", facebook: "fecebook.com", twitter: "twitter.com",
	militaries_attributes: ({service_country: "Ukraine", branch: "navi", rank: "major", start_date: "2006-05-01", end_date: "2014-03-02", i_am_currently_serving: false, description: "Army", commendations: "no"}),
	awards_attributes: ({title: "Oskar", date_awarded: "2017-06-05", description: "Best Actor"}),
	groups_attributes: ({title: "Metallica", start_date: "2001-06-04", end_date: "2018-06-23", i_am_still_a_member: true, description: "Rock"}),
	patents_attributes: ({patent_number: "patent03567", title: "Water", url: "water.com", date_awarded: "2001-01-01", description: "All water"}),
	publications_attributes: ({title: "Best article", url: "best.article.com", date_published: "2003-06-05", description: "Best Article"}),
	additional_information_step_5: "Many interesting about me", user_id: 3)