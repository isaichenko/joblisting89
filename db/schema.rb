# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190228220954) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applied_jobs", force: :cascade do |t|
    t.integer "resume_id"
    t.integer "job_id"
    t.integer "status", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "awards", force: :cascade do |t|
    t.string "title"
    t.date "date_awarded"
    t.text "description"
    t.bigint "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resume_id"], name: "index_awards_on_resume_id"
  end

  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.text "featured_image"
    t.datetime "published_at"
    t.integer "status", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "blogs_categories", id: false, force: :cascade do |t|
    t.bigint "blog_id", null: false
    t.bigint "category_id", null: false
  end

  create_table "blogs_tags", id: false, force: :cascade do |t|
    t.bigint "blog_id", null: false
    t.bigint "tag_id", null: false
  end

  create_table "bookmarked_jobs", force: :cascade do |t|
    t.integer "user_id"
    t.integer "job_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookmarked_resumes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "certifications", force: :cascade do |t|
    t.string "title"
    t.date "start_date"
    t.date "end_date"
    t.text "description"
    t.bigint "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resume_id"], name: "index_certifications_on_resume_id"
  end

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string "data_file_name", null: false
    t.string "data_content_type"
    t.integer "data_file_size"
    t.string "type", limit: 30
    t.integer "width"
    t.integer "height"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["type"], name: "index_ckeditor_assets_on_type"
  end

  create_table "companies", force: :cascade do |t|
    t.string "title"
    t.integer "hires_per_year"
    t.string "name"
    t.string "phone"
    t.string "country"
    t.string "city"
    t.integer "postal_code"
    t.text "payment_info"
    t.text "about"
    t.text "why_join_us"
    t.string "website"
    t.string "industry"
    t.integer "number_of_employee"
    t.text "logo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_companies_on_user_id"
  end

  create_table "credit_cards", force: :cascade do |t|
    t.string "digits", null: false
    t.string "brand", null: false
    t.integer "month", null: false
    t.integer "year", null: false
    t.string "stripe_id", null: false
    t.string "paypal_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_default", default: false
  end

  create_table "currencies", force: :cascade do |t|
    t.string "iso_code"
    t.string "name"
    t.string "symbol"
    t.boolean "symbol_first"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "educations", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "faqs", force: :cascade do |t|
    t.string "question"
    t.string "answer"
    t.integer "status", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "follows", force: :cascade do |t|
    t.string "followable_type", null: false
    t.bigint "followable_id", null: false
    t.string "follower_type", null: false
    t.bigint "follower_id", null: false
    t.boolean "blocked", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followable_id", "followable_type"], name: "fk_followables"
    t.index ["followable_type", "followable_id"], name: "index_follows_on_followable_type_and_followable_id"
    t.index ["follower_id", "follower_type"], name: "fk_follows"
    t.index ["follower_type", "follower_id"], name: "index_follows_on_follower_type_and_follower_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "title"
    t.date "start_date"
    t.date "end_date"
    t.boolean "i_am_still_a_member"
    t.text "description"
    t.bigint "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resume_id"], name: "index_groups_on_resume_id"
  end

  create_table "job_areas", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "job_titles", force: :cascade do |t|
    t.string "title"
    t.string "ancestry"
    t.boolean "status", default: true
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_job_titles_on_title"
  end

  create_table "job_types", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "job_types_resumes", id: false, force: :cascade do |t|
    t.bigint "resume_id", null: false
    t.bigint "job_type_id", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.integer "salary_min"
    t.integer "salary_max"
    t.integer "hires"
    t.text "description"
    t.string "email"
    t.text "address"
    t.integer "experience"
    t.date "expiry_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "job_area_id"
    t.bigint "job_type_id"
    t.bigint "education_id"
    t.bigint "user_id"
    t.boolean "spotlight", default: false
    t.integer "plan_id"
    t.boolean "is_subscribe_payment_plan", default: false
    t.index ["education_id"], name: "index_jobs_on_education_id"
    t.index ["job_area_id"], name: "index_jobs_on_job_area_id"
    t.index ["job_type_id"], name: "index_jobs_on_job_type_id"
    t.index ["user_id"], name: "index_jobs_on_user_id"
  end

  create_table "keywords", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_keywords_on_user_id"
  end

  create_table "militaries", force: :cascade do |t|
    t.string "service_country"
    t.string "branch"
    t.string "rank"
    t.date "start_date"
    t.date "end_date"
    t.boolean "i_am_currently_serving"
    t.text "description"
    t.text "commendations"
    t.bigint "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resume_id"], name: "index_militaries_on_resume_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.datetime "subscription_date"
    t.string "job_title"
    t.string "plan_name"
    t.string "payment_method"
    t.string "plan_status"
    t.float "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "company_id"
    t.string "company_name"
    t.integer "plan_id"
    t.integer "job_id"
    t.bigint "credit_card_id"
    t.integer "status"
    t.index ["credit_card_id"], name: "index_orders_on_credit_card_id"
  end

  create_table "patents", force: :cascade do |t|
    t.string "patent_number"
    t.string "title"
    t.string "url"
    t.date "date_awarded"
    t.text "description"
    t.bigint "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resume_id"], name: "index_patents_on_resume_id"
  end

  create_table "photos", force: :cascade do |t|
    t.text "source"
    t.bigint "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_photos_on_company_id"
  end

  create_table "plans", force: :cascade do |t|
    t.string "name"
    t.datetime "duration"
    t.float "price"
    t.string "currency"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payment_gateway"
    t.integer "duration_days"
    t.bigint "currency_id"
    t.index ["currency_id"], name: "index_plans_on_currency_id"
  end

  create_table "publications", force: :cascade do |t|
    t.string "title"
    t.string "url"
    t.date "date_published"
    t.text "description"
    t.bigint "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resume_id"], name: "index_publications_on_resume_id"
  end

  create_table "resumes", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "country"
    t.string "city"
    t.text "contact_information"
    t.string "phone"
    t.string "degree"
    t.string "school"
    t.string "field_of_study"
    t.string "education_country"
    t.string "education_city"
    t.date "education_start_date"
    t.date "education_end_date"
    t.string "desired_job_title"
    t.integer "desired_salary_per_month"
    t.integer "desired_salary_per_year"
    t.integer "employment_eligibility", default: 0
    t.boolean "relocation"
    t.text "additional_information_step_4"
    t.text "additional_information_step_5"
    t.string "blog_url"
    t.string "personal_homepage"
    t.string "facebook"
    t.string "twitter"
    t.text "profile_pic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.integer "status", default: 0
    t.index ["user_id"], name: "index_resumes_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "balance"
    t.integer "benefits"
    t.integer "advancement"
    t.integer "management"
    t.integer "culture"
    t.decimal "average"
    t.integer "question1"
    t.integer "question2"
    t.integer "question3"
    t.integer "question4"
    t.integer "question5"
    t.text "description"
    t.string "name"
    t.string "job_title"
    t.string "location"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "company_id"
    t.index ["company_id"], name: "index_reviews_on_company_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "title"
    t.integer "experience"
    t.bigint "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resume_id"], name: "index_skills_on_resume_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "name"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.integer "status", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider"
    t.string "uid"
    t.string "roles"
    t.integer "interface", default: 1
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "work_experiences", force: :cascade do |t|
    t.string "job_title"
    t.string "company"
    t.string "country"
    t.string "city"
    t.date "start_date"
    t.date "end_date"
    t.integer "years_of_experience"
    t.boolean "less_than_one_year"
    t.string "job_type_work_exp"
    t.boolean "i_currently_work_here"
    t.text "job_description"
    t.integer "salary"
    t.integer "salary_status", default: 0
    t.bigint "resume_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resume_id"], name: "index_work_experiences_on_resume_id"
  end

  add_foreign_key "awards", "resumes"
  add_foreign_key "certifications", "resumes"
  add_foreign_key "companies", "users"
  add_foreign_key "groups", "resumes"
  add_foreign_key "jobs", "educations"
  add_foreign_key "jobs", "job_areas"
  add_foreign_key "jobs", "job_types"
  add_foreign_key "jobs", "users"
  add_foreign_key "keywords", "users"
  add_foreign_key "militaries", "resumes"
  add_foreign_key "orders", "credit_cards"
  add_foreign_key "patents", "resumes"
  add_foreign_key "photos", "companies"
  add_foreign_key "plans", "currencies"
  add_foreign_key "publications", "resumes"
  add_foreign_key "resumes", "users"
  add_foreign_key "reviews", "companies"
  add_foreign_key "skills", "resumes"
  add_foreign_key "work_experiences", "resumes"
end
