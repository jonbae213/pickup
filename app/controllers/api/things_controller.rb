class Api::ThingsController < ApplicationController

  def index
    if params[:hobby_id] === undefined
      @things = Thing.all
    else
      @things = Hobby.includes(:things).find_by(id: params[:hobby_id])
    end
    render :index
  end

  def show
    @thing = Thing.find_by(id: params[:id])
    render :show
  end

end