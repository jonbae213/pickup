import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';
import merge from 'lodash';

const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.user.id });
    case LOGOUT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default sessionReducer;