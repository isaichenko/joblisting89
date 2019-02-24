class CheckoutController < ApplicationController

  def index
    @job = Job.find(params[:id]) if params.present?
    @plan = @job.plan if @job.present?
  end

  def show
    @job = Job.find(params[:id]) if params.present?
    @plan = @job.plan
  end

  def stripe_pay
    job_id = request.referer.split('/').last
    job = Job.find(job_id)
    plan = job.plan
    company = Company.find(job.company_ids.last)

    additional_params = {:job => job, :plan => plan, :company => company }
    result = Stripe::StripeChargesService.new(params, additional_params).call
    if result
      respond_to do |format|
        format.html { redirect_to jobs_path,  notice: 'Stripe payment success!'  }
      end
    end
  end

  def paypal_pay
    job_id = request.referer.split('/').last
    job = Job.find(job_id)
    plan = job.plan
    company = Company.find(job.company_ids.last)
    params = {:job => job, :plan => plan, :company => company}
    order = PayPal::GetOrder::new(params)::get_order(params[:order_id])
    if order
      respond_to do |format|
        format.html { redirect_to jobs_path, notice: 'PayPal payment success!' }
      end
    end
  end

  def credit_card_params
    params.permit(:number, :month, :years, :verification_value)
  end

end