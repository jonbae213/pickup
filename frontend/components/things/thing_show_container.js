import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ThingPage from './thing_show';
import { createReview } from '../../actions/review_actions';
import { getThingReviews } from '../../actions/thing_actions';
import { getAllHobbies } from '../../actions/hobby_actions';

const msp = state => ({
  things: state.entities.things,
  reviews: state.entities.reviews,
  users: state.entities.users,
});

const mdp = dispatch => ({
  fetchAllThings: () => dispatch(getAllThings()),
  fetchAllHobbies: () => dispatch(getAllHobbies()),
  postReview: review => dispatch(createReview(review)),
  fetchReviews: thingId => dispatch(getThingReviews(thingId)) 
});

export default withRouter(connect(msp, mdp)(ThingPage));