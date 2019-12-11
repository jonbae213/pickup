export const fetchAllThings = () => {
  return $.ajax({
    method: "GET",
    url: "/api/things"
  })
}
