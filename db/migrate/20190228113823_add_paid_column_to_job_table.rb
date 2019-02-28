class AddPaidColumnToJobTable < ActiveRecord::Migration[5.1]
  def change
    add_column :jobs, :is_subscribe_payment_plan, :boolean, :default => false
  end
end
