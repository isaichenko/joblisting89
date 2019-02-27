class CheckoutController < ApplicationController

  def index
    @job = Job.find(params[:id]) if params.present?
    @plan = @job.plan if @job.present?
  end

  def show
    @job = Job.find_by(id: params[:id])
    if @job.present?
      @plan = @job.plan
    else
      redirect_to jobs_path, notice: 'Job not found!'
    end
  end

  def stripe_pay
    job_id = request.referer.split('/').last
    job = Job.find(job_id)
    plan = job.plan
    company = Company.find(job.company_ids.last)
    if current_user.nil? && params[:user_id].present?
      binding.pry
      payer = User.find_by(:id => params[:user_id])
    elsif current_user.present?
      payer = current_user
    end
    additional_params = {:job => job, :plan => plan, :company => company, :user => payer}
    result = StripeChargesService.new(params, additional_params).call
    if result
      respond_to do |format|
        format.html { redirect_to jobs_path,  notice: 'Stripe payment success!'  }
      end
    else
      respond_to do |format|
        format.html { render :show ,:id => job_id, notice: 'Stripe payment failed!' }
      end
    end
  end

  def paypal_pay
    job_id = request.referer.split('/').last
    job = Job.find(job_id)
    plan = job.plan
    company = Company.find(job.company_ids.last)
    additional_params = {:job => job, :plan => plan, :company => company}
    order = PayPal::GetOrder::new(additional_params)::get_order(params[:order_id])
    if order
      respond_to do |format|
        format.html { redirect_to jobs_path,  notice: 'PayPay payment success!'  }
      end
    else
      respond_to do |format|
        format.html { render :show ,:id => job_id, notice: 'PayPal payment failed!' }
      end
    end
  end

  def credit_card_params
    params.permit(:number, :month, :years, :verification_value)
  end

end