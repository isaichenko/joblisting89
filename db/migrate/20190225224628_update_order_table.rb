class UpdateOrderTable < ActiveRecord::Migration[5.1]
  def change
    remove_reference :orders, :credit_cards
    add_reference :orders, :credit_card, foreign_key: true
  end
end
