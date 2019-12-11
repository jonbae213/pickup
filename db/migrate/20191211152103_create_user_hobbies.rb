class CreateUserHobbies < ActiveRecord::Migration[5.2]
  def change
    create_table :user_hobbies do |t|
      t.bigint :hobby_id, null: false
      t.bigint :user_id, null: false
      t.timestamps
    end
    add_index :user_hobbies, [:hobby_id, :user_id], unique: true
  end
end
