class DropUserIdFromCreditCard < ActiveRecord::Migration[5.1]
  def change
    remove_column :credit_cards, :user_id
  end
end
