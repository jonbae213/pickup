class AddTimestampsUserThings < ActiveRecord::Migration[5.2]
  def change
    add_column :user_things, :created_at, :datetime, null: false
    add_column :user_things, :updated_at, :datetime, null: false
  end
end
