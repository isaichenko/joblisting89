class CreatePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :plans do |t|
      t.string :name
      t.datetime :duration
      t.float :price
      t.string :currency

      t.timestamps
    end
  end
end
