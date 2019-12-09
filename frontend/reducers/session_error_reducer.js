import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge([], state, action.errors)
    default:
      return state;
  }
}

export default sessionErrorReducer;