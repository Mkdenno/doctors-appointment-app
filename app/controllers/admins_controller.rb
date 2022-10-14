class AdminsController < ApplicationController
    def show
        admin = Admin.find_by(id: session[:admin_id])
        if admin
        render json: admin
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # def index
    #     user= User.all
    #     render json: user
    # end

    def create
        admin = Admin.create(signup_params)
        if admin.valid?
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
        
        end

    end

    private
    def signup_params
        params.permit(:email, :password, :password_confirmation)
    end
end
