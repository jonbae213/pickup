import { combineReducers } from 'redux';
import { thingsReducer } from './things_reducer';
import { hobbiesReducer } from './hobbies_reducer'

export default combineReducers({
  things: thingsReducer,
  hobbies: hobbiesReducer,
});