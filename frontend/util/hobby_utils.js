export const fetchAllHobbies = () => {
  return $.ajax({
    method: "GET",
    url: "/api/hobbies"
  });
}

export const followHobby = hobbyId => {
  return $.ajax({
    method: "POST",
    url: `/api/hobbies/${hobbyId}/user_hobbies`
  });
} 

export const unfollowHobby = hobbyId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/hobbies/${hobbyId}/user_hobbies`
  });
}