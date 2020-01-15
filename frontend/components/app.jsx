import React from 'react';
import Modal from './modal/modal';
import Navbar from '../components/navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { SplashImg } from './pages/logged_out';
import Footer from './pages/footer';
import HomeContainer from './home/home_container';
import { Route } from 'react-router-dom';
import AllHobbiesContainer from './hobbies/all_hobbies_container';
import MyHobbiesContainer from './hobbies/my_hobbies_container';
import ThingPage from './things/thing_show';

export default () => (
  <>
    <Modal />
    <Navbar />
    <main className="app">
      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <AuthRoute exact path="/" component={SplashImg} />
      <Route exact path="/all-hobbies" component={AllHobbiesContainer} />
      <Route path="/things/:thingId" component={ThingPage} />
      <Route exact path="/my-hobbies" component={MyHobbiesContainer} />
      {/* <ProtectedRoute path="/profile" component={ProfileContainer} /> */}
    </main>
    <Footer />
  </>
);
