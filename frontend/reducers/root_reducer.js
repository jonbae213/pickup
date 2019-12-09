import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import sessionErrorReducers from './session_error_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: { 
    session: sessionErrorReducers 
  } 
});

export default rootReducer;