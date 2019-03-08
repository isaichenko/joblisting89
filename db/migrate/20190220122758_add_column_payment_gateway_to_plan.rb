class AddColumnPaymentGatewayToPlan < ActiveRecord::Migration[5.1]
  def change
    add_column :plans, :payment_gateway, :string
  end
end
