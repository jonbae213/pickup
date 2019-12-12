import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.payload.user };
    case LOGOUT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default sessionReducer;