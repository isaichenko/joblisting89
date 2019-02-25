class CreateCreditCardsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :credit_cards do |t|
      t.integer  "user_id",                    null: false
      t.string   "digits",                     null: false
      t.string   "brand",                      null: false
      t.integer  "month",                      null: false
      t.integer  "year",                       null: false
      t.string   "stripe_id",                  null: false
      t.string   "paypal_id",                  null: false
      t.datetime "created_at",                 null: false
      t.datetime "updated_at",                 null: false
      t.boolean  "is_default", default: false
      t.index ["user_id"], name: "index_credit_cards_on_user_id", using: :btree
    end
  end
end
