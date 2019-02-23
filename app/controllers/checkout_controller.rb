class CheckoutController < ApplicationController

  def index
  end

  def stripe_pay
    binding.pry

  end

  def paypal_pay
    job = Job.last
    plan = Plan.last
    company = Company.last
    params[:job => job, :plan => plan, :company => company]
    order = PayPal::GetOrder::new(params)::get_order(params[:order_id])
  end

  def credit_card_params
    params.permit(:number, :month, :years, :verification_value)
  end

end