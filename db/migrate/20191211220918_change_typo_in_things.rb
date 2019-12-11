class ChangeTypoInThings < ActiveRecord::Migration[5.2]
  def change
    remove_column :things, :desription
    add_column :things, :description, :text, null: false
    change_column :things, :deadline, :string, null: true
  end
end
