@things.each do |thing|
  json.partial! 'api/shared/things', thing: thing
end