class Order < ApplicationRecord
  belongs_to :credit_card
  belongs_to :plan

  enum status: {
      draft: 0,
      paid: 1
  }

end
