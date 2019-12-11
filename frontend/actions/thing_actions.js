import { fetchAllThings } from '../util/thing_utils';

export const RECEIVE_ALL_THINGS = "RECEIVE_ALL_THINGS";

export const receiveAllThings = things => ({
  type: RECEIVE_ALL_THINGS,
  things
}) 

export const getAllThings = () => dispatch => {
  fetchAllThings()
    .then((things) => dispatch(receiveAllThings(things)));  
}
