import { connect } from 'react-redux';

const msp = state => ({
  things: state.entities.things,
  review: state.entitites.reviews,
})

const mdp = dispatch => ({
  postReview: thingId => dispatch()
})