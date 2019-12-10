import { 
  RECEIVE_CURRENT_USER, 
  RECEIVE_SESSION_ERRORS 
} from '../actions/session_actions';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return [];
  }
}

export default sessionErrorReducer;