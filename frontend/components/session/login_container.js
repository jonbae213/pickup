import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import AccountForm from './_account_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Log In"
})

const mapDispatchToProps = dispatch => ({
  submitForm: formUser => dispatch(loginUser(formUser))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountForm));
