class CreateJobTitles < ActiveRecord::Migration[5.1]
  def change
    create_table :job_titles do |t|
      t.string :title
      t.string :ancestry
      t.boolean :status,  default: true
      t.integer :user_id

      t.timestamps
    end
    
    add_index :job_titles, :title
    
  end
end
