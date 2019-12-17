import React from 'react';
import Modal from './modal/modal';
import Navbar from '../components/navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { SplashImg } from './pages/logged_out';
import Footer from './pages/footer';
import HomeContainer from './pages/home_container';
import { Route } from 'react-router-dom';
import AllHobbiesContainer from './hobbies/all_hobbies_container';


export default () => (
  <>
    <Modal />
    <Navbar />
    <main className="app">
      <ProtectedRoute path="/home" component={HomeContainer}/>
      <AuthRoute path="/" component={SplashImg} />
      <Route path="/all-hobbies" component={AllHobbiesContainer} />
      {/* <Route path="/things/:thingId" component={ThingPage} /> */}
    </main>
    <Footer />
  </>
);
