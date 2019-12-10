import React from 'react';
import Modal from './modal/modal';
import { Route } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import { logoutUser } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import Navbar from '../components/navbar/navbar_container';

export default () => (
  <>
    <Modal />
    <Navbar />
  </>
);
