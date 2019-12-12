import { fetchAllThings, fetchThingReviews } from '../util/thing_utils';

export const RECEIVE_ALL_THINGS = "RECEIVE_ALL_THINGS";
export const RECEIVE_THING = "RECEIVE_THING";

export const receiveAllThings = things => ({
  type: RECEIVE_ALL_THINGS,
  things
}) 

export const receiveThing = reviews => ({
  type: RECEIVE_THING,
  reviews
})

export const getAllThings = () => dispatch => {
  return fetchAllThings()
    .then((things) => dispatch(receiveAllThings(things)));  
}

export const getThingReviews = (thingId) => dispatch => {
  return fetchThingReviews(thingId)
    .then((reviews) => dispatch(receiveThing(reviews)));
}