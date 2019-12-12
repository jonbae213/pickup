import { fetchAllHobbies } from '../util/hobby_utils';

export const RECEIVE_ALL_HOBBIES = "RECEIVE_ALL_HOBBIES";

export const receiveAllHobbies = hobbies => ({
  type: RECEIVE_ALL_HOBBIES,
  hobbies
})

export const getAllHobbies = () => dispatch => {
  return fetchAllHobbies()
    .then((hobbies) => dispatch(receiveAllHobbies(hobbies)));
}