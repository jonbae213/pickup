class ChangeFullNameInUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :full_name, :string, default: ""
  end
end
