class AddDurationDaysToPlan < ActiveRecord::Migration[5.1]
  def change
    add_column :plans, :duration_days, :integer
  end
end
