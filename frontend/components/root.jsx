import React from 'react';
import App from './app';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);