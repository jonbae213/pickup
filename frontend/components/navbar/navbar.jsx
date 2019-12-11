import Modal from '../modal/modal';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { Route } from 'react-router-dom';
import { login } from '../../util/user_util';


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
    let loginSignup;
    let logoutButton;
    if (this.props.currentUser) {
      logoutButton = <button onClick={this.handleLogout}>Log Out</button>
    } else {
      loginSignup = <nav className="login-signup">
        <div className="signup">
          <button onClick={this.handleSignup}>SIGN UP</button>
        </div>
        <div className="login">
          <button onClick={this.handleLogin}>LOG IN</button>
        </div>
      </nav>
    }
    return (
      <nav className="header-nav-bar">
        <img className="logo" src={window.logo} />
        {loginSignup}
        {logoutButton}
      </nav>
    )
  }
}

export default Navbar;