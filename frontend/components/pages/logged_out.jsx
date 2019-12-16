import React from 'react';

export class SplashImg extends React.Component {
  render() {
    return (
      <section className="splash-page">
        <div className="welcome-content">
          <h1>HOBBY-INSPIRED THINGS, DESIGNED FOR EVERYONE.</h1>
          <p> Join our family of passion-filled people to find and follow your hobbies. Discover innovative things, made possible by the collective effort of our users. </p>
        </div>
        <section className="splash-img-container">
          <img src={window.logged_out} className="splash-img" />  
        </section>  
      </section>
    );
  }
};