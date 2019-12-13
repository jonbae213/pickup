import { RECEIVE_THE_USER, LOGOUT_USER } from '../actions/user_actions';
import { merge } from 'lodash/merge';

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_THE_USER:
      return merge({}, state, action.payload.user);
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
