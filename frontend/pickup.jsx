import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, logout, login } from './util/session_util';

document.addEventListener("DOMContentLoaded", () => {
 
  const root = document.getElementById("root");
  const store = configureStore();
  window.getState = store.getState();
  window.dispatch = store.dispatch();
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<div>this</div>, root)
});