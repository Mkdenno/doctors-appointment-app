class AppointmentsController < ApplicationController
    def index
        appoint=Appointment.all
        render json: appoint, status: :ok
    end

    def create
        appoint=Appointment.create(appointments_params)
        render json: appoint, status: :created
    end

    def update 
        appoint=Appointment.find_by(id: params[:id])
        
        if appoint

        appoint.update(appointments_params)

        render json:appoint

        else
            render json: { error: "not found" }, status: :not_found
        end

    end

    private
    def appointments_params
        params.permit(:username, :email, :user_id, :doctor_id, :status)
    end

end
