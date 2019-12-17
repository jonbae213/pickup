import { fetchAllHobbies,
  followHobby,
  unfollowHobby } from '../util/hobby_utils';
import { receiveCurrentUser } from './user_actions';

export const RECEIVE_ALL_HOBBIES = "RECEIVE_ALL_HOBBIES";

export const receiveAllHobbies = hobbies => ({
  type: RECEIVE_ALL_HOBBIES,
  hobbies
})

export const getAllHobbies = () => dispatch => {
  return fetchAllHobbies()
    .then((hobbies) => dispatch(receiveAllHobbies(hobbies)));
}

export const followTheHobby = hobbyId => dispatch => {
  return followHobby(hobbyId)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const unfollowTheHobby = hobbyId => dispatch => {
  return unfollowHobby(hobbyId)
    .then(user => dispatch(receiveCurrentUser(user)))
}