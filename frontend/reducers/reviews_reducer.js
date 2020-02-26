import { RECEIVE_THING } from '../actions/thing_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_THE_USER, LOGOUT_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

export const reviewsReducer = (state = {}, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_THING:
      if (action.payload.reviews) {
        return merge({}, state, action.payload.reviews);
      } else {
        return state;
      }
    case RECEIVE_CURRENT_USER:
      if (action.payload.reviews) {
        return action.payload.reviews;
      } else {
        return {};
      }
    case RECEIVE_THE_USER:
      if (action.payload.reviews) {
        return action.payload.reviews;
      } else {
        return {};
      }
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
