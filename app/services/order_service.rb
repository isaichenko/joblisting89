class OrderService
  attr_accessor :order

  def initialize
    @order = Order.new
  end

  def pay_pay_order(data)
    @order.company_name = data[:company_name]
    @order.username = data[:username]
    @order.email = data[:email]
    @order.subscription_date = data[:subscription_date]
    @order.job_title = data[:job_title]
    @order.plan_name = data[:plan_name]
    @order.payment_method = 'PayPal'
    @order.plan_status = 'Active'
    @order.amount = data[:amount]
    @order.job_id = data[:job_id]
    @order.save!
  end


  def stripe_order(data)
    @order.company_name = data[:company_name]
    @order.username = data[:username]
    @order.email = data[:email]
    @order.subscription_date = data[:subscription_date]
    @order.job_title = data[:job_title]
    @order.plan_name = data[:plan_name]
    @order.payment_method = 'Stripe'
    @order.plan_status = 'Active'
    @order.amount = data[:amount]
    @order.job_id = data[:job_id]
    @order.save!
  end

end