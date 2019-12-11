@things.each do |thing|
  json.partial! 'api/things/things', thing: thing
end