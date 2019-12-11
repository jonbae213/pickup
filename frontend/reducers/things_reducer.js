import { RECEIVE_ALL_THINGS } from '../actions/thing_actions';

export const thingsReducer = (state ={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_THINGS:
      return action.things
    default:
      return state;
  }
}