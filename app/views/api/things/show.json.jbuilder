json.set! things do 
  @thing.reviews.each do |review|
    json.set! review.id do 
      json.extract! review, :body, :id, :stars
    end
  end
end
json.set! users do 
  @thing.reviews.each do |review|
    json.set! review.user_id do 
      json.extract! review.user, :full_name, :email
    end
  end
end
