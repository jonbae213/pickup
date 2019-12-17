import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import Profile from './profile';

const msp = state => ({
  currentUser: state.session.currentUser,
  hobbies: state.entitites.hobbies,
  things: state.entities.things
});

const mdp = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(msp, mdp)(Profile);

