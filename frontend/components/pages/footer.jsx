import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <section className="logo-container">
          <img src={window.logoNegative} className="footer-logo" />
        </section>
        <section className="footer-about">
          <h3>ABOUT</h3>
          <a href="https://github.com/jonbae213/pickup">My Repository</a>
        </section>
        <section className="footer-linkedin">
          <h3>FOLLOW ME</h3>
          <a href="https://linkedin.com/in/jonathan-bae-b9099118a">Jonathan Bae</a>
        </section>
      </section>
    )
  }
}

export default Footer;