class AddPlanIdToOrderTable < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :plan_id, :integer
  end
end
