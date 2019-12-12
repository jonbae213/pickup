import { RECEIVE_THE_USER } from '../actions/user_actions';
import { merge } from 'lodash/merge';

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_THE_USER:
      return merge({}, state, action.user)
    default:
      return state;
  }
}
