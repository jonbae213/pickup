class CreateHobbies < ActiveRecord::Migration[5.2]
  def change
    create_table :hobbies do |t|
      t.string :name, null: false
      t.text :description, null: false
    end
    add_index :hobbies, :name, unique: true
  end
end
