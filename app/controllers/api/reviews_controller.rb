class Api::ReviewsController < ApplicationController

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update({ stars: review_params[:stars], body: review_params[:body]})
      @user = User.includes(:reviews, :things, :hobbies).find_by(id: @review.id)
 
      render '/api/users/show'
    else
      render json: @review.errors.full_messages
    end
  end

  def create
    @review = Review.new(review_params)

    if @review.save 
      @thing = Thing.includes(:reviews).find_by(@review.thing_id)
      render '/api/things/show'
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @user = User.includes(:reviews)
      .includes(:things)
      .includes(:hobbies)
      .find_by(id: @review.id)
    @review.destroy!
  
    render '/api/users/show'
  end

  private

  def review_params
    params.require(:review).permit(:stars, :body)
  end

end