class CheckoutController < ApplicationController

  def index
  end

  def stripe
    credit_card_params
  end

  def paypal
  end

  def credit_card_params
    params.permit(:number, :month, :years, :verification_value)
  end

end