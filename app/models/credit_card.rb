class CreditCard < ApplicationRecord
  has_many :order
  attribute :token, :string

  def save_card_info(card)
    self.stripe_id = card.id
    self.paypal_id = "-"
    self.digits = card.last4
    self.brand = card.brand
    self.month = card.exp_month
    self.year = card.exp_year
    self.is_default = true
    self.save!
    self
  end

end
