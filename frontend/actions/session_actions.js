import * as SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutTheUser = () => ({
  type: LOGOUT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

export const createNewUser = formUser => dispatch => {
  SessionUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const loginUser = formUser => dispatch => {
  SessionUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const logoutUser = () => dispatch => {
  SessionUtil.logout()
    .then(() => dispatch(logoutTheUser()),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};