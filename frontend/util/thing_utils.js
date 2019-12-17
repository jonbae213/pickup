export const fetchAllThings = () => {
  return $.ajax({
    method: "GET",
    url: "/api/things"
  });
}

export const fetchThingReviews = (thingId) => {
  return $.ajax({
    method: "GET",
    url: `/api/things/${thingId}`
  });
}

export const saveThing = thingId => {
  return $.ajax({
    method: "POST",
    url: `/api/things/${thingId}/user_things`
  });
}

export const unsaveThing = thingId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/things/${thingId}/user_things`
  });
}