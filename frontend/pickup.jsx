import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { signup, logout, login } from './util/session_util';

document.addEventListener("DOMContentLoaded", () => {
 
  const root = document.getElementById("root");
  
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  };
  const store = configureStore(preloadedState);
  
  ReactDOM.render(<Root store={store}/>, root)
});