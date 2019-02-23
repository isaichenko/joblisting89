require_relative 'pay_pal_client'
require 'json'
require 'ostruct'

include PayPalCheckoutSdk::Orders

module PayPal
  class GetOrder

    attr_accessor :job, :plan, :company

    def initialize(params)
      @job = params[:job]
      @plan = params[:plan]
      @company = params[:company]
    end

    def get_order(order_id)
      request = OrdersGetRequest::new(order_id)
      response = PayPalClient::client::execute(request)
      get_transaction(response)
    end

    def get_transaction(response)
      result =  PayPalClient::openstruct_to_hash(response)
      set_transaction(result)
    end

    def set_transaction(hash)
      payments = hash[:result][:purchase_units][0][:payments]
      amount = hash[:result][:purchase_units][0][:payments][:captures][0][:amount][:value].to_f
      payer = hash[:result][:payer]
      username = hash[:result][:payer][:name].values.join(' ')
      email = hash[:result][:payer][:email_address]
      subscription_date = hash[:result][:purchase_units][0][:payments][:captures][0][:create_time]
      data = {:company_name => @company.try(:title), :username => username, :email => email, :subscription_date => subscription_date,
              :job_title => @job.try(:title), :plan_name => @plan.try(:name), :amount => amount
      }
      OrderService.new.pay_pay_order(data)
    end

  end
end
