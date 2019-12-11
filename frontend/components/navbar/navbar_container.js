import { openModal } from '../../actions/modal_actions';
import { logoutUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Navbar from './navbar';

const msp = state => ({
  currentUser: state.session.currentUser
});

const mdp = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Navbar);