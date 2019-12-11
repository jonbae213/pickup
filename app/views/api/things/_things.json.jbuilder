thing.set! thing.id do 
  json.extract! thing, :id, :name, :price, :description
end