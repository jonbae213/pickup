import { RECEIVE_ALL_HOBBIES } from '../actions/hobby_actions';

export const hobbiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_HOBBIES:
      return action.hobbies
    default:
      return state;
  }
}