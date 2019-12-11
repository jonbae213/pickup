json.partial! 'api/hobbies/hobbies', hobby: @hobby
json.thing_ids do
  thing_array = []
  @hobby.things.each do |thing|
    thing_array << thing
  end
  json.array! thing_array
ends