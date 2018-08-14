class CreateFaqs < ActiveRecord::Migration[5.1]
  def change
    create_table :faqs do |t|
    # Add question and answer fields
      t.string :question
      t.string :answer
      t.column :status, :integer, default: 0
      t.timestamps
    end
  end
end
