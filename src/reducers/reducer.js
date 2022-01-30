import { combineReducers } from 'redux';

import userLoginReducer from './userLogin';
import userProfileReducer from './userProfile';
import userRegistrationReducer from './userRegistration';
import bookSearchReducer from './bookSearch';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userRegistration: userRegistrationReducer,
  bookSearch: bookSearchReducer,
});

export default rootReducer;
