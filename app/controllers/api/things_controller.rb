class Api::ThingsController < ApplicationController

  def index
    @things = Thing.all
    render :index
  end

end