@things.each do |thing|
  json.set! thing.id do 
    json.extract! thing, :id, :name, :price, :description
  end
end