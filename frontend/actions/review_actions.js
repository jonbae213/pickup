import { postReview, updateReview, deleteReview } from '../util/review_utils';

export const createReview = review => dispatch => {
  return postReview(review)
    .then()
}