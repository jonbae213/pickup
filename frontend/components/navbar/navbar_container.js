import { openModal } from '../../actions/modal_actions';
import { logoutUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { withRouter } from 'react-router-dom';

const msp = state => ({
  currentUser: state.session.currentUser,
  hobbies: state.entities.hobbies,
});

const mdp = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(Navbar));