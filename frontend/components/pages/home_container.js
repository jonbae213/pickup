import Home from './home';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllHobbies } from '../../actions/hobby_actions';
import { getAllThings, saveTheThing, unsaveTheThing } from '../../actions/thing_actions';

const msp = state => ({
  things: state.entities.things,
  hobbies: state.entities.hobbies,
  currentUser: state.session.currentUser
})

const mdp = dispatch => ({
  getAllHobbies: () => dispatch(getAllHobbies()),
  getAllThings: () => dispatch(getAllThings()),
  saveThing: (thingId) => dispatch(saveTheThing(thingId)),
  unsaveThing: (thingId) => dispatch(unsaveTheThing(thingId))
})

export default withRouter(connect(msp, mdp)(Home));