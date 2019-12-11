class Api::HobbiesController < ApplicationController

  def index
    @hobbies = Hobby.all
    render :index  
  end

  def show
    @hobby = Hobby.includes(:items).find_by(id: params[:id])
    render :show
  end

end
