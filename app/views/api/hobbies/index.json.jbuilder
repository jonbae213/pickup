@hobbies.each do |hobby|
  json.partial! 'api/shared/hobby', hobby: hobby
  json.thing_ids do
    thing_array = []
    @hobby.things.each do |thing|
      thing_array << thing
    end
    json.array! thing_array
  end
end