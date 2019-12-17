import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveTheThing, unsaveTheThing } from '../../actions/hobby_actions'
import HobbiesPage from './hobbies_page';

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
    page: 'my-hobbies'
  }
};

const mdp = dispatch => ({
  saveThing: (thingId) => dispatch(saveTheThing(thingId)),
  unsaveThing: (thingId) => dispatch(unsaveTheThing(thingId))
});

export default withRouter(connect(msp, mdp)(HobbiesPage));