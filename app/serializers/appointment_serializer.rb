class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :user_id, :doctor_id, :status
end
