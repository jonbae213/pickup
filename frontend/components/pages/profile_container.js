import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { saveTheThing, unsaveTheThing } from '../../actions/thing_actions';
import { followTheHobby, unfollowTheHobby } from '../../actions/hobby_actions';
import Profile from './profile';
import { saveThing } from '../../util/thing_utils';

const msp = state => ({
  currentUser: state.session.currentUser,
  hobbies: state.entitites.hobbies,
  things: state.entities.things
});

const mdp = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  saveTheThing: thingId => dispatch(saveTheThing(thingId)),
  unsaveTheThing: thingId => dispatch(unsaveTheThing(thingId)),
  followTheHobby: hobbyId => dispatch(followTheHobby(hobbyId)),
  unfollowTheHobby: hobbyId => dispatch(unfollowTheHobby(hobbyId))
});

export default connect(msp, mdp)(Profile);

