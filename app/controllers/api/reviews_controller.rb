class Api::ReviewsController < ApplicationController

  def update

  end

  def create

  end

  def destroy

  end

  private

  def review_params
    params.require(:review).permit(:thing_id)
  end

end