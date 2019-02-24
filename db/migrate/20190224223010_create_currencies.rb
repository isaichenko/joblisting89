class CreateCurrencies < ActiveRecord::Migration[5.1]
  def change
    create_table :currencies do |t|
      t.string :iso_code
      t.string :name
      t.string :symbol
      t.boolean :symbol_first

      t.timestamps
    end
  end
end
