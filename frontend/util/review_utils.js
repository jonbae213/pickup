export const postReview = review => {
  return $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: { review }
  });
}

export const updateReview = review => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  });
}

export const deleteReview = reviewId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`
  })
}