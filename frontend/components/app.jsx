import React from 'react';
import SignUpContainer from './session/signup_container';
import { Route } from 'react-router-dom';

export default () => (
  <>
    <div> This should show instead </div>
    <Route path="/signup" component={SignUpContainer} />
  </>
);
