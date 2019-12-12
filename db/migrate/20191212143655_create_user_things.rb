class CreateUserThings < ActiveRecord::Migration[5.2]
  def change
    create_table :user_things do |t|
      t.bigint :thing_id, null: false
      t.bigint :user_id, null: false
    end
    add_index :user_things, [:thing_id, :user_id], unique: true
  end
end
