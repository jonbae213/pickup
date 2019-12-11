export const fetchAllHobbies = () => {
  return $.ajax({
    method: "GET",
    url: "/api/hobbies"
  })
}
