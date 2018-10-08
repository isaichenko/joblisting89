class AddSpotlightToJobs < ActiveRecord::Migration[5.1]
  def change
    add_column :jobs, :spotlight, :boolean, default: false
  end
end
