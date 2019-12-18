import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveTheThing, unsaveTheThing, getAllThings } from '../../actions/thing_actions';
import HobbiesPage from './hobbies_page';
import { getAllHobbies } from '../../actions/hobby_actions';

const msp = state => ({
  currentUser: state.session.currentUser,
  hobbies: state.entities.hobbies,
  things: state.entities.things,
  page: 'all-hobbies'
});

const mdp = dispatch => ({
  saveTheThing: (thingId) => dispatch(saveTheThing(thingId)),
  unsaveTheThing: (thingId) => dispatch(unsaveTheThing(thingId)),
  getAllHobbies: () => dispatch(getAllHobbies()),
  getAllThings: () => dispatch(getAllThings()),
});

export default withRouter(connect(msp, mdp)(HobbiesPage));

