class StripeService

  attr_accessor :credit_card_number, :credit_card_month, :credit_card_years, :credit_verification_value,
                :customer_name, :customer_address1, :customer_city, :customer_state, :customer_zip

  def initialize(credit_card_params, customer_params)
    @credit_cart_number = credit_card_params[:number]
    @credit_card_month = credit_card_params[:month]
    @credit_cart_years = credit_card_params[:years]
    @credit_cart_verification_value = credit_card_params[:verification_value]
    @customer_name = customer_params[:name]
    @customer_address1 = customer_params[:address1]
    @customer_city = customer_params[:city]
    @customer_state = customer_params[:state]
    @customer_zip = customer_params[:zip]
  end


  def billing_geteway
    ActiveMerchant::Billing::StripeGateway

    transaction = ActiveMerchant::Billing::StripeGateway.new(:login => ENV['STRIPE_SECRET_KEY'])

    paymentInfo = ActiveMerchant::Billing::CreditCard.new(
        :number             => @credit_cart_number,
        :month              => @credit_card_month,
        :year               => @credit_cart_years,
        :verification_value => @credit_cart_verification_value)

    purchaseOptions = {:billing_address => {
        :name     => @customer_name,
        :address1 => @customer_address1,
        :city     => @customer_city,
        :state    => @customer_state,
        :zip      => @customer_zip
    }}

    response = transaction.purchase((17.50 * 100).to_i, paymentInfo, purchaseOptions)

    if response.success? then
      logger.debug "charge successful"
    end


  end





end