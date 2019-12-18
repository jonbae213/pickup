class Api::HobbiesController < ApplicationController

  def index
    @hobbies = Hobby.includes(:things).all
    render :index  
  end

  def follow
    user_hobby = UserHobby.new({
      hobby_id: params[:hobby_id],
      user_id: current_user.id
    })
    if user_hobby.save
      @user = current_user
      render '/api/users/show'
    else
      render user_hobby.errors.full_messages
    end
  end

  def unfollow
    user_hobby = UserHobby.find_by({
      hobby_id: params[:hobby_id],
      user_id: current_user.id
    })
    if user_hobby.destroy
      @user = current_user
      render '/api/users/show'
    else
      render user_hobby.errors.full_messages
    end
  end

end
