class AddCreditCardIdToOrder < ActiveRecord::Migration[5.1]
  def change
    add_reference :orders, :credit_cards, foreign_key: true
  end
end
