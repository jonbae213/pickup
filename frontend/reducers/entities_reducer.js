import { combineReducers } from 'redux';
import { thingsReducer } from './things_reducer';
import { hobbiesReducer } from './hobbies_reducer';
import { usersReducer } from './users_reducer';
import { reviewsReducer } from './reviews_reducer';

export default combineReducers({
  users: usersReducer,
  things: thingsReducer,
  hobbies: hobbiesReducer,
  reviews: reviewsReducer,
});