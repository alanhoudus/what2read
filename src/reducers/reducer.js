import { combineReducers } from 'redux';

import userLoginReducer from './userLogin';
import userProfileReducer from './userProfile';
import userRegistrationReducer from './userRegistration';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userRegistration: userRegistrationReducer,
});

export default rootReducer;
