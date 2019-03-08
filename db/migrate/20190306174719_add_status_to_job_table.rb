class AddStatusToJobTable < ActiveRecord::Migration[5.1]
  def change
    add_column :jobs, :status, :integer
  end
end
