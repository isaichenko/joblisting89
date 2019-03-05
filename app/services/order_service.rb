class OrderService
  attr_accessor :order

  def initialize
    @order = Order.new
  end

  def pay_pay_order(data)
    begin
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
      @order.credit_card = CreditCard.last
      @order.plan = data[:plan]
      if @order.save!
        @order.update(status: :paid)
        set_subscribe_job(@order.job_id)
      end
      @order
    rescue => error
      return false
    end
  end


  def stripe_order(data)
    begin
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
      @order.credit_card = data[:card]
      @order.plan = data[:plan]
      if @order.save!
        @order.update(status: :paid)
        set_subscribe_job(@order.job_id)
      end
      @order
    rescue => error
      return false
    end
  end

  private

    def set_subscribe_job(job_id)
      job = Job.find_by(:id => job_id)
      job.is_subscribe_payment_plan = true
      job.save(:validate => false)
      Job.reindex
      jobs = Job.where(is_subscribe_payment_plan: false)
      jobs.map{|j| Job.searchkick_index.remove(j)}
    end
end