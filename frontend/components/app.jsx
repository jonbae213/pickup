import React from 'react';
import Modal from './modal/modal';
import Navbar from '../components/navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { SplashImg } from './pages/logged_out';
import Footer from './pages/footer';
import HomeContainer from './home/home_container';
import { Route } from 'react-router-dom';
import HobbiesContainer from './hobbies/hobbies_container';
import ThingPage from './things/thing_show_container';

export default () => (
  <>
    <Modal />
    <Navbar />
    <main className="app">
      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <AuthRoute exact path="/" component={SplashImg} />
      <Route exact path="/hobbies" component={HobbiesContainer} />
      <Route path="/things/:thingId" component={ThingPage} />
      {/* <ProtectedRoute path="/profile" component={ProfileContainer} /> */}
    </main>
    <Footer />
  </>
);
