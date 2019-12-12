import * as UserUtil from '../util/user_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_THE_USER = "RECEIVE_THE_USER";

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

const receiveTheUser = user => ({
  type: RECEIVE_THE_USER,
  user
});

export const createNewUser = formUser => dispatch => {
  UserUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const loginUser = formUser => dispatch => {
  UserUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const logoutUser = () => dispatch => {
  UserUtil.logout()
    .then(() => dispatch(logoutTheUser()),
    (err) => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const updateUser = (formUser) => dispatch => {
  UserUtil.updateUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
};

export const getUser = userId => dispatch => {
  UserUtil.fetchUser(userId)
    .then(user => dispatch(receiveTheUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
};