import { combineReducers } from 'redux';

import userLoginReducer from './userLogin';
import userProfileReducer from './userProfile';
import userRegistrationReducer from './userRegistration';
import bookSearchReducer from './bookSearch';
import booksReducer from './books';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userRegistration: userRegistrationReducer,
  bookSearch: bookSearchReducer,
  books: booksReducer,
});

export default rootReducer;
