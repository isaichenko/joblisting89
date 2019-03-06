require 'paypal-sdk-rest'
include PayPal::SDK::REST
include PayPal::SDK::Core::Logging

class PaypalController < ApplicationController

  def checkout
    job_id = params[:job_id]
    @job = Job.find(job_id)
    @plan = @job.plan
    @company = Company.find(@job.company_ids.last)
    currency_iso_code = params[:currency]
    @payment = Payment.new({
                   :intent =>  "sale",
                   :payer =>  {
                       :payment_method =>  "paypal"
                   },
                   :redirect_urls => {
                       :return_url => "https://joblisting89.herokuapp.com/execute",
                       :cancel_url => "https://joblisting89.herokuapp.com/" },
                   :transactions =>  [{
                      :item_list => {
                          :items => [{
                             :name => @plan.name,
                             :sku => @plan.id,
                             :price => @plan.price,
                             :currency => currency_iso_code,
                             :quantity => 1
                                     }
                          ]
                      },
                                :amount =>  {
                                :total =>  @plan.price,
                                :currency =>  currency_iso_code},
                                :description => @plan.name
                             }
                   ]
                           })

    if @payment.create
      render json: {success: true, paymentID: @payment.id}
    else
      render json: {success: false}
    end
  end

  def execute
    job_id = params[:job_id]
    @job = Job.find(job_id)
    @plan = @job.plan
    @company = Company.find(@job.company_ids.last)
    payment = PayPal::SDK::REST::Payment.find(params[:paymentID])

    if payment.execute(payer_id: params[:payerID])
      amount = payment.transactions.first.amount.total.to_f
      username = payment.payer.payer_info.first_name.to_s + ' ' + payment.payer.payer_info.last_name.to_s
      email = payment.payer.payer_info.email
      subscription_date = payment.create_time
      data = {:company_name => @company.try(:title), :username => username, :email => email, :subscription_date => subscription_date,
              :job_title => @job.try(:title), :plan_name => @plan.try(:name), :amount => amount, :job_id => @job.id, :plan => @plan
      }
      OrderService.new.pay_pay_order(data)
      render json: {result: true, msg: 'Payment Complete Successful!'}
    else
      render json: {result: false, msg: 'Payment Error. Please check again!'}
    end
  end

end