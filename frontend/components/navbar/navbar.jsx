import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.signedInNavRight = this.signedInNavRight.bind(this);
    this.handleSearchbar = this.handleSearchbar.bind(this);
    this.signedInNavLeft = this.signedInNavLeft.bind(this);
    this.handleView = this.handleView.bind(this);
    this.goHome = this.goHome.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }
  
  goHome(e) {
    e.preventDefault();
    this.props.history.push('/home');
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

  handleSearchbar(e) {
    e.preventDefault();
    this.props.openModal('Searchbar');
  }

  handleView(e) {
    e.preventDefault();
    this.props.history.push('/hobbies');
  }

  handleProfile(e) {
    e.preventDefault();
    this.props.history.push('/profile')
  }

  signedInNavRight() {
    return (
      <section className="navbar-right">
        <button className="searchbar-btn" onClick={this.handleSearchbar}>
          <img className="searchbar-icon" src={window.searchIcon} />
        </button>
        <div className="navbar-dropdown">
          <button className="navbar-dropdown-btn" onClick={this.handleProfile}>{
            this.props.currentUser.email.slice(0,1).toUpperCase()
          }</button>
          <div className="navbar-dropdown-content">
            {/* <Link to="/profile">Profile</Link>
            <Link to="/saved">Saved</Link> */}
            <button onClick={this.handleLogout}>Log Out</button>
          </div>
        </div>
      </section>
    ) 
  }

  signedInNavLeft() {
    let hobbies;
    
    if (Object.values(this.props.hobbies).length > 0 && this.props.currentUser.hobby_ids.length > 0) {
      hobbies = this.props.currentUser.hobby_ids.map(hobbyId => {
        return (
          <div className="dropdown-list-items" key={hobbyId}>
            <Link to={`/${this.props.hobbies[hobbyId].name.toLowerCase().split(' ').join('-')}`}>
              {this.props.hobbies[hobbyId].name}
            </Link>
          </div>
        );
      });
    }
    
    return (
      <button className="view-dropdown-btn" onClick={this.handleView}>VIEW</button>
    );
  }
  
  render() {
    let loginSignup;
    let loggedInRight;
    let loggedInLeft;
    if (this.props.currentUser) {
      loggedInRight = this.signedInNavRight();
      loggedInLeft = this.signedInNavLeft();
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
        <section className="navbar-content">
          <section className="navbar-left">
            <button className="home-btn" onClick={this.goHome}>
              <img className="logo" src={window.logo} />
            </button>
            {loggedInLeft}
          </section>
          {loginSignup}
          {loggedInRight}
        </section>
      </nav>
    );
  }
}

export default Navbar;