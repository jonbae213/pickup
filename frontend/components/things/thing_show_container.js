import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ThingPage from './thing_show';

const msp = state => ({
  things: state.entities.things,
  reviews: state.entitites.reviews,
});

const mdp = dispatch => ({
  postReview: thingId => dispatch()
});

export default withRouter(connect(msp, mdp)(ThingPage));