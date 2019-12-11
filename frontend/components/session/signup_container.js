import { connect } from 'react-redux';
import { createNewUser, loginUser } from '../../actions/session_actions';
import AccountForm from './_account_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Sign Up"
})

const mapDispatchToProps = dispatch => ({
  submitForm: formUser => dispatch(createNewUser(formUser)),
  loginUser: formUser => dispatch(loginUser(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);

