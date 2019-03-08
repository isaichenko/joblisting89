class AddPlanIdToJobTable < ActiveRecord::Migration[5.1]
  def change
    add_column :jobs, :plan_id, :integer
  end
end
