class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :get_current_user_things, :get_current_user_hobbies

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

  def get_current_user_things
    @current_user.things.map do |thing|
      thing.id
    end
  end

  def get_current_user_hobbies
    @current_user.hobbies.map do |hobby|
      hobby.id
    end
  end
end
