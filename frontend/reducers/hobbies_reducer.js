import { RECEIVE_ALL_HOBBIES } from '../actions/hobby_actions';
import { LOGOUT_USER } from '../actions/user_actions';

export const hobbiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_HOBBIES:
      return action.hobbies;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}