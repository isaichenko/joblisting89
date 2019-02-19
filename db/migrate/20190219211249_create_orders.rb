class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :username
      t.string :email
      t.datetime :subscription_date
      t.string :job_title
      t.string :plan_name
      t.string :payment_method
      t.string :plan_status
      t.float :amount

      t.timestamps
    end
  end
end
