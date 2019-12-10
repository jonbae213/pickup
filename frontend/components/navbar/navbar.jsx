import Modal from '../modal/modal';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { Route } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }
  
  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.openModal('Log In');
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.openModal('Sign Up');
  }
  
  render() {
    return (
      <nav className="header-nav-bar">
        <img src=""/>
        <button onClick={this.handleLogout}>Log Out</button>
        <nav className="login-signup">
          <button onClick={this.handleLogin}>Log In</button>
          <button onClick={this.handleSignup}>Sign Up</button>
        </nav>
      </nav>
    )
  }
}

export default Navbar;