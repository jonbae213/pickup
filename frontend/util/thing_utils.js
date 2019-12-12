export const fetchAllThings = () => {
  return $.ajax({
    method: "GET",
    url: "/api/things"
  })
}

export const fetchThingReviews = (thingId) => {
  return $.ajax({
    method: "GET",
    url: `/api/things/${thingId}`
  })
}