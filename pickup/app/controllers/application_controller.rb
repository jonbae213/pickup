class ApplicationController < ActionController::Base
  helper_method :current_user
  helper_method :logged_in?

  def current_user
    token = session[:session_token]
    return nil unless token
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user
  end

  def logged_in?
    !!current_user
  end

  def login_user!(user)
    session[:session_token] = user.reset_session_token!
  end

end
