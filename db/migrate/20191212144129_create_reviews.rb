class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.bigint :thing_id, null: false
      t.bigint :user_id, null: false
      t.text :body, null: false
      t.integer :stars, null: false, inclusion: 0..5
      t.timestamps
    end

    add_index :reviews, :thing_id
    add_index :reviews, :user_id
  end
end
