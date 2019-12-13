@thing.reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :body, :id, :stars
  end
end