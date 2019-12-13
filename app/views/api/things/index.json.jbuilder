@things.each do |thing|
  json.set! thing.id do 
    json.extract! thing, :id, :name, :price, :description
    json.review_ids do 
      review_arr = []
      thing.reviews.each do |review|
        review_arr << review.id
      end
      json.array! review_arr
    end
  end
end