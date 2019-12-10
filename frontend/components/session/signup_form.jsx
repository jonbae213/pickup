import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      full_name: "",
      password: "",
      aboutme: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(formType) {
    return (e) => {
      this.setState({ [formType]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
  }
  
  render() {
    return (
      <>
        <h2>Sign Up!</h2>
        <form>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label>Full_name:
            <input type="text"
              value={this.state.full_name}
              onChange={this.handleInput('full_name')}
            />
          </label>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>Join Our Family!</button>
        </form>
      </>
    )
  }
}

export default SignupForm;