class DoctorsController < ApplicationController
    def index
        doc=Doctor.all
        render json: doc, include: :appointments
    end

    def show
        user = Doctor.find_by(id: session[:user_id])
        if user
        render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        head :no_content
    end
end
