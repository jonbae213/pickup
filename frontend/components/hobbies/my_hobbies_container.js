import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveTheThing, unsaveTheThing, getAllThings } from '../../actions/thing_actions';
import HobbiesPage from './hobbies_page';
import { getAllHobbies } from '../../actions/hobby_actions';

const msp = state => {
  let userHobbies = state.session.currentUser.hobby_ids.map(hobbyId => {
    return state.entities.hobbies[hobbyId]
  });
  let hobbiesThingsArr = [];
  userHobbies.forEach(hobby => {
    hobbiesThingsArr = hobbiesThingsArr.concat(hobby.thing_ids)
  });

  let things = hobbiesThingsArr.map(thingId => {
    return state.entities.things[thingId]
  })
  
  return {
    things: things,
    page: 'my-hobbies',
    currentUser: state.session.currentUser,
  }
};

const mdp = dispatch => ({
  saveThing: (thingId) => dispatch(saveTheThing(thingId)),
  unsaveThing: (thingId) => dispatch(unsaveTheThing(thingId)),
  getAllHobbies: () => dispatch(getAllHobbies()),
  getAllThings: () => dispatch(getAllThings()),
});

export default withRouter(connect(msp, mdp)(HobbiesPage));