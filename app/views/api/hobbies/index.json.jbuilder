@hobbies.each do |hobby|
  json.set! hobby.id do  
    json.partial! 'api/hobbies/hobbies', hobby: hobby
    json.thing_ids do
      thing_array = []
      @hobby.things.each do |thing|
        thing_array << thing.id
      end
      json.array! thing_array
    end
  end
end