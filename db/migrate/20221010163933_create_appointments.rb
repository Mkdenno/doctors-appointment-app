class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :email
      t.string :username
      t.integer :user_id
      t.integer :doctor_id
      t.boolean :status

      t.timestamps
    end
  end
end
