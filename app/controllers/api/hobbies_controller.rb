class Api::HobbiesController < ApplicationController

  def index
    @hobbies = Hobby.all
    render :index  
  end

end
