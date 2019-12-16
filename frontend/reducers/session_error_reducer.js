import { 
  RECEIVE_CURRENT_USER, 
  RECEIVE_SESSION_ERRORS, 
  RECEIVE_THE_USER
} from '../actions/user_actions';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_THE_USER:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return [];
  }
}

export default sessionErrorReducer;