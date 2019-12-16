json.user do
  json.extract! @user, :id, :full_name, :aboutme, :email
  json.thing_ids do
    thing_array = []
    @user.things.each do |thing|
      thing_array << thing.id
    end
    json.array! thing_array
  end
  json.hobby_ids do
    hobby_array = []
    @user.hobbies.each do |hobby|
      hobby_array << hobby.id
    end
    json.array! hobby_array
  end
  json.review_ids do
    review_array = []
    @user.reviews.each do |review|
      review_array << review.id
    end
    json.array! review_array
  end
end

json.reviews do
  if @user.reviews.length === 0
    []
  else
    @user.reviews.each do |review|
      json.set! review.id do 
        json.extract! review, :body, :stars, :id
      end
    end
  end
end