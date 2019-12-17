import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveTheThing, unsaveTheThing } from '../../actions/hobby_actions';
import AllHobbies from './all_hobbies';

const msp = state => ({
  hobbies: state.entities.hobbies,
  things: state.entities.things
});

const mdp = dispatch => ({
  saveTheThing: (thingId) => dispatch(saveTheThing(thingId)),
  unsaveTheThing: (thingId) => dispatch(unsaveTheThing(thingId))
});

export default withRouter(connect(msp, mdp)(AllHobbies))

