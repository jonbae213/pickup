import { RECEIVE_ALL_THINGS } from '../actions/thing_actions';
import { LOGOUT_USER } from '../actions/user_actions';

export const thingsReducer = (state ={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_THINGS:
      return action.things;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}