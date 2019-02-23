class StripeChargesService
  DEFAULT_CURRENCY = 'usd'.freeze

  attr_accessor  :stripe_email, :stripe_token, :job, :plan, :company

  def initialize(params, related_params)
    @stripe_email = params[:stripeEmail]
    @stripe_token = params[:stripeToken]
    @job = related_params[:job]
    @plan = related_params[:plan]
    @company = related_params[:company]
  end

  def call
    create_charge(find_customer)
  end

  def get_customer(customer_id)
    Stripe::Customer.retrieve(customer_id)
  end


  def set_transaction(charge)
    customer = get_customer(charge.customer)
    amount = @plan.price
    username = charge.customer
    email = customer.email
    subscription_date = Time.at(charge.created).to_datetime
    data = {:company_name => @company.try(:title), :username => username, :email => email, :subscription_date => subscription_date,
            :job_title => @job.try(:title), :plan_name => @plan.try(:name), :amount => amount
    }
    OrderService.new.stripe_order(data)
  end


  private

  def find_customer
    create_customer
  end

  def create_customer
    customer = Stripe::Customer.create(email: @stripe_email,source: @stripe_token)
    customer
  end

  def create_charge(customer)
    transaction = Stripe::Charge.create(
        customer: customer.id,
        amount: order_amount,
        description: customer.email,
        currency: DEFAULT_CURRENCY
    )
    set_transaction(transaction)
  end

  def order_amount
    @plan.price.to_i*100 if @plan.price.present?
  end
end
