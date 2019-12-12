import React from 'react';

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.switchForm = this.switchForm.bind(this);
  }

  handleInput(input) {
    return (e) => {
      this.setState({ [input]: e.target.value });
    }
  }

  handleSubmit(e) {
    this.props.submitForm(this.state)
      .then(() => this.props.history.push('/home'));
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      const errs = this.props.errors.map((err, i) => {
        return <li className="errors-list-item" key={i}>{err}</li>
      });
      return (
        <ul className="errors-list">
          {errs}
        </ul>
      );
    }
  }

  demoUser() {
    this.props.loginUser({email: "tester1@gmail.com", password: "applepie"})
      // .then(this.props.history.push('/home'));
  }

  switchForm() {
    this.props.openModal(this.props.otherFormType);
  }

  render() {
    return (
      <>
        <h2>{this.props.formType}</h2>
        <button onClick={this.demoUser}>DEMO USER</button>
        <div className="signin-login-divider">OR</div>
        <div className="errors-container">{this.renderErrors()}</div>
        <form>
          <div className="form-row">
            <label>Email
              <input required type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>
          </div>
          <div className="form-row">
            <label>Password
              <input required type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
          </div>
          <button onClick={this.handleSubmit}>{this.props.formType.toUpperCase()}</button>
        </form>
        <span>
          <div>{this.props.text}</div>
          <button onClick={this.switchForm}>{this.props.otherFormType.toUpperCase()}</button>    
        </span>
      </>
    )
  }
}

export default AccountForm;