import React from 'react';
import Modal from './modal/modal';
import Navbar from '../components/navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { SplashImg } from './pages/logged_out';
import Footer from './pages/footer';
import ThingsIndexContainer from './things/allthings_index_container';
import { Route } from 'react-router-dom';

export default () => (
  <>
    <Modal />
    <Navbar />
    <main className="app">
      <Route path="/home" component={ThingsIndexContainer}/>
      <AuthRoute path="/" component={SplashImg} />
    </main>
    <Footer />
  </>
);
