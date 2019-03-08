class AddColumnCompanyNameToOrder < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :company_name, :string
  end
end
