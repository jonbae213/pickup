import React from 'react';
import Modal from './modal/modal';
import Navbar from '../components/navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { SplashImg } from './pages/logged_out';
import Footer from './pages/footer';

export default () => (
  <>
    <Modal />
    <Navbar />
    <AuthRoute path="/" component={SplashImg} />
    <Footer />
  </>
);
