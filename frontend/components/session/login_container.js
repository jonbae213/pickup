import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';
import AccountForm from './account_form';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { getAllHobbies } from '../../actions/hobby_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Log In",
  otherFormType: "Sign Up",
  text: "Not a member yet?"
})

const mapDispatchToProps = dispatch => ({
  submitForm: formUser => dispatch(loginUser(formUser)),
  loginUser: formUser => dispatch(loginUser(formUser)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllHobbies: () => dispatch(getAllHobbies()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountForm));
