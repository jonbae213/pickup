@thing.reviews.each do |review|
  json.review.id do 
    json.extract! review, :body, :id, :stars
  end
end