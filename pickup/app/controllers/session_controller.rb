class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login_user!(@user)
      render "/api/user/#{@user.id}"
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    render json: "it worked"
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end