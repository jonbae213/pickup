import Modal from '../modal/modal';
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.signedInNav = this.signedInNav.bind(this);
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

  signedInNav() {
    return (
      <div className="navbar-dropdown">
        <button className="navbar-dropdown-btn">{
          this.props.currentUser.email.slice(0,1).toUpperCase()
        }</button>
        <div className="navbar-dropdown-content">
          <Link to="/profile">Profile</Link>
          <Link to="/saved">Saved</Link>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
      </div>
    ) 
  }
  
  render() {
    let loginSignup;
    let loggedIn;
    
    if (this.props.currentUser) {
      
      loggedIn= this.signedInNav();
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
        {loggedIn}
      </nav>
    );
  }
}

export default Navbar;