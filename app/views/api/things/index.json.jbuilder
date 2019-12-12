@things.each do |thing|
  json.set! thing.id do 
    json.extract! thing, :id, :name, :price, :description
    thing.reviews.each do |review|
      json.review.id do 
        json.extract! review, :body, :id, :stars
      end
    end
  end
end