import { RECEIVE_THING } from '../actions/thing_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_THE_USER, LOGOUT_USER } from '../actions/user_actions';

export const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_THING:
      return action.reviews;
    case RECEIVE_CURRENT_USER:
      return action.payload.reviews;
    case RECEIVE_THE_USER:
      return action.payload.reviews;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
