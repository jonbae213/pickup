import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
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