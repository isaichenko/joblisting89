class CompaniesController < ApplicationController
  access all: [:show], user: :all, superadmin: :all
  before_action :set_company, only: [:edit, :show, :update, :destroy, :follow_unfollow]
  before_action :authenticate_user!, only: [:follow_unfollow]
  def index
    @companies = Company.setup_by(current_user)
  end

  def new
    if user_signed_in? && current_user.companies.count == 0
      @company = Company.new
    else
      redirect_to allcompanies_path, notice: 'You do not have permission for this action!'
    end
  end

  def create
    @company = Company.new(company_params)
    @company.user_id = current_user.id

    respond_to do |format|
      if @company.save
        format.html { redirect_to companies_path, notice: 'Your Company was created.' }
      else
        format.html { render :new }
      end
    end
  end

  def edit
    if user_signed_in? && @company.user_id == current_user.id
    else
      redirect_to allcompanies_path, notice: 'You do not have permission for this action!'
    end
  end

  def update
    respond_to do |format|
      if @company.update(company_params)
        format.html { redirect_to companies_path, notice: 'The Company was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def show
    @reviews = @company.reviews.to_a
    @avg_rating = if @reviews.blank?
                    0
                  else
                    @company.reviews.average(:average).round(2)
                  end

    respond_to do |format|
      format.html {}
      format.js
    end
  end

  def follow_unfollow
    if current_user.following?(set_company)
      current_user.stop_following(set_company)
      flash[:notice] = "You have successfully unfollowed #{set_company.title}"
      CompanyMailer.follow_unfollow_to_user(current_user.email, 'UnFollowed', set_company.title).deliver_now
      CompanyMailer.follow_unfollow_to_company(set_company.user.email, 'UnFollowed').deliver_now
    else
      current_user.follow(set_company)
      flash[:notice] = "You are now following #{set_company.title}"
      CompanyMailer.follow_unfollow_to_user(current_user.email, 'Followed', set_company.title).deliver_now
      CompanyMailer.follow_unfollow_to_company(set_company.user.email, 'Followed').deliver_now
    end
    redirect_to set_company
  end

  private
  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:title,
                                    :hires_per_year,
                                    :name,
                                    :phone,
                                    :country,
                                    :city,
                                    :postal_code,
                                    :payment_info,
                                    :about,
                                    :why_join_us,
                                    :website,
                                    :industry,
                                    :number_of_employee,
                                    :logo,
                                    :user_id,
                                    photos_attributes: [:id, :source, :_destroy])
  end
end
