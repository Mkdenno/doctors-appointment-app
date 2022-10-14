class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :username
      t.string :email
      t.string :description
      t.string :location
      t.string :password

      t.timestamps
    end
  end
end
