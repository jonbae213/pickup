import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    let aboutme;
    if (this.props.currentUser.aboutme.length > 0) {
      aboutme = this.props.currentUser.aboutme;
    } else {
      aboutme = "Tell us a bit about yourself. Interests, favorite things, and projects you're working on can be put here."
    }

    this.state = {
      aboutme: this.props.currentUser.aboutme
    }
    
    this.handleInput = this.handleInput.bind(this);
  }

  updateUserInfo(e) {
    e.preventDefault();
  }

  handleInput(e) {
    return (e) => {
      this.setState({ aboutme: e.target.value })
    }
  }

  render() {
    return (
      <>
        <form className="profile-form">
          <label className="aboutme-label">
            <input type="text" 
              value={this.state.aboutme}
              onChange={this.handleInput}/>
          </label>
        </form>
      </>
    )
  }
}