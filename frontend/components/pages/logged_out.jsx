import React from 'react';

export class SplashImg extends React.Component {
  render() {
    return (
      <section className="splash-page">
        <img src={window.logged_out} className="splash-img-container" />
      </section>
    );
  }
};