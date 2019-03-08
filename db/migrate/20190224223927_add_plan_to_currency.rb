class AddPlanToCurrency < ActiveRecord::Migration[5.1]
  def change
    add_reference :plans, :currency, foreign_key: true
  end
end
