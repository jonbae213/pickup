import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveTheThing, unsaveTheThing } from '../../actions/hobby_actions';
import { unsaveThing } from '../../util/thing_utils';
import AllHobbies from './all_hobbies';

const msp = state => ({
  hobbies: state.entities.hobbies,
  things: state.entities.things
});

const mdp = dispatch => ({
  saveTheThing: (thingId) => dispatch(saveTheThing(thingId)),
  unsaveTheThing: (thingId) => dispatch(unsaveThing(thingId))
});

export default withRouter(connect(msp, mdp)(AllHobbies))

