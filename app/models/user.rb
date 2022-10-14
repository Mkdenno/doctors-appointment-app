class User < ApplicationRecord
    has_secure_password
    has_many :appointments
    has_many :doctors, through: :appointments


    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum:8}
end
