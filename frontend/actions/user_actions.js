import * as UserUtil from '../util/user_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_THE_USER = "RECEIVE_THE_USER";

const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

const logoutTheUser = () => ({
  type: LOGOUT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

const receiveTheUser = payload => ({
  type: RECEIVE_THE_USER,
  payload
});

export const createNewUser = formUser => dispatch => {
  return UserUtil.signup(formUser)
    .then(payload => dispatch(receiveCurrentUser(payload)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const loginUser = formUser => dispatch => {
  return UserUtil.login(formUser)
    .then(payload => dispatch(receiveCurrentUser(payload)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const logoutUser = () => dispatch => {
  return UserUtil.logout()
    .then(() => dispatch(logoutTheUser()),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const updateUser = (formUser) => dispatch => {
  return UserUtil.updateUser(formUser)
    .then(payload => dispatch(receiveCurrentUser(payload)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const getUser = userId => dispatch => {
  return UserUtil.fetchUser(userId)
    .then(payload => dispatch(receiveTheUser(payload)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
};