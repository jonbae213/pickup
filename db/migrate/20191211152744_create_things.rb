class CreateThings < ActiveRecord::Migration[5.2]
  def change
    create_table :things do |t|
      t.bigint :hobby_id, null: false
      t.string :name, null: false
      t.integer :price, null: false
      t.date :deadline, null: false
      t.text :desription, null: false
      t.timestamps
    end
    add_index :things, :hobby_id
    add_index :things, :name, unique: true
  end
end
