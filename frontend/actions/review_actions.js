import { postReview, updateReview, deleteReview } from '../util/review_utils';
import { receiveThing } from './thing_actions';
import { receiveTheUser } from './user_actions';

export const createReview = review => dispatch => {
  return postReview(review)
    .then((payload) => dispatch(receiveThing(payload)));
}

export const updateReview = review => dispatch => {
  return updateReview(review)
    .then((payload) => dispatch(receiveTheUser(payload)));
}

export const deleteReview = reviewId => dispatch => {
  return deleteReview(reviewId)
    .then((payload) => dispatch(receiveTheUser(payload)));
}