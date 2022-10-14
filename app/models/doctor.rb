class Doctor < ApplicationRecord
    # has_secure_password
    has_many :appointments, dependent: :destroy
    has_many :users, through: :appointments
end
