import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { getAllThings } from './actions/thing_actions';
import { getAllHobbies } from './actions/hobby_actions';
import { getThingReviews } from './actions/thing_actions';

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
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.getAllThings = getAllThings;
  window.getAllHobbies = getAllHobbies;
  window.getThingReviews = getThingReviews;
  ReactDOM.render(<Root store={store}/>, root)
});