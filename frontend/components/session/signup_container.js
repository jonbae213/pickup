import { connect } from 'react-redux';
import { createNewUser, loginUser } from '../../actions/user_actions';
import AccountForm from './_account_form';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Sign Up",
  otherFormType: "Log In",
  text: "Already a member?"
})

const mapDispatchToProps = dispatch => ({
  submitForm: formUser => dispatch(createNewUser(formUser)),
  loginUser: formUser => dispatch(loginUser(formUser)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);

