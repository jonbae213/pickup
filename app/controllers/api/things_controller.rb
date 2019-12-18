class Api::ThingsController < ApplicationController

  def index
    @things = Thing.includes(:reviews).all
    render :index
  end

  def save
    user_thing = UserThing.new({
      thing_id: params[:thing_id],
      user_id: current_user.id
    })
    
    if user_thing.save
      @user = current_user
      render '/api/users/show'
    else
      render user_thing.errors.full_messages
    end
  end

  def unsave
    user_thing = UserThing.find_by({
      thing_id: params[:thing_id],
      user_id: current_user.id
    })
    if user_thing.destroy
      @user = current_user
      render '/api/users/show'
    else
      render user_thing.errors.full_messages 
    end
  end

  def show
    @thing = Thing.includes(:reviews).find_by(id: params[:id])
    render :show
  end
end