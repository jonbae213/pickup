@hobbies.each do |hobby|
  json.set! hobby.id do 
    json.extract! hobby, :id, :name, :description 
    json.thing_ids do
      thing_array = []
      hobby.things.each do |thing|
        thing_array << thing.id
      end
      json.array! thing_array
    end
  end
end
