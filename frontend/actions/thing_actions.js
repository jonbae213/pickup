import { fetchAllThings, 
  fetchThingReviews,
  saveThing,
  unsaveThing } from '../util/thing_utils';
import { receiveCurrentUser } from './user_actions';


export const RECEIVE_ALL_THINGS = "RECEIVE_ALL_THINGS";
export const RECEIVE_THING = "RECEIVE_THING";

export const receiveAllThings = things => ({
  type: RECEIVE_ALL_THINGS,
  things
}) 

export const receiveThing = payload => ({
  type: RECEIVE_THING,
  payload
})

export const getAllThings = () => dispatch => {
  return fetchAllThings()
    .then((things) => dispatch(receiveAllThings(things)));  
}

export const getThingReviews = (thingId) => dispatch => {
  return fetchThingReviews(thingId)
    .then((payload) => dispatch(receiveThing(payload)));
}

export const saveTheThing = thingId => dispatch => {
  return saveThing(thingId)
    .then(user => dispatch(receiveCurrentUser(user)));
}

export const unsaveTheThing = thingId => dispatch => {
  return unsaveThing(thingId)
    .then(user => dispatch(receiveCurrentUser(user)));
}