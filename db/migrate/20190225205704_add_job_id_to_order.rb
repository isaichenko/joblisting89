class AddJobIdToOrder < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :job_id, :integer
  end
end
