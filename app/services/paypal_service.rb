require "rubygems"
require "active_merchant"

class PaypalService

  attr_accessor :credit_card_number, :credit_card_month, :credit_card_years, :credit_verification_value,
                :credit_card_type, :customer_first_name, :customer_last_name


  def initialize(credit_card_params, customer_params)
    @credit_card_number = credit_card_params[:number]
    @credit_card_month = credit_card_params[:month]
    @credit_card_years = credit_card_params[:years]
    @credit_card_type = credit_card_params[:type]
    @credit_verification_value = credit_card_params[:verification_value]
    @customer_first_name = customer_params['first_name']
    @customer_last_name = customer_params['last_name']
  end


  def billing_geteway
    ActiveMerchant::Billing::Base.mode = :test

    gateway = ActiveMerchant::Billing::PaypalGateway.new(
        :login => ENV['PAYPAL_LOGIN'],
        :password => ENV['PAYPAL_PASSWORD'],
        :signature => ENV['PAYPAL_SIGNATURE']
    )

    credit_card = ActiveMerchant::Billing::CreditCard.new(
        :type               => @credit_card_type,
        :number             => @credit_card_number,
        :verification_value => @credit_verification_value,
        :month              => @credit_card_month,
        :year               => @credit_card_years,
        :first_name         => @customer_first_name,
        :last_name          => @customer_last_name
    )

    if credit_card.valid?

      response = gateway.authorize(1000, credit_card, :ip => "127.0.0.1")
      if response.success?
        gateway.capture(1000, response.authorization)
        puts "Purchase complete!"
      else
        puts "Error: #{response.message}"
      end
    else
      puts "Error: credit card is not valid. #{credit_card.errors.full_messages.join('. ')}"
    end
  end
end