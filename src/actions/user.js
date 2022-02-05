export const UPDATE_LOGIN_VALUE = 'UPDATE_LOGIN_VALUE';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const LOGGING_ERROR = 'LOGGING_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_PROFILE_VALUE = 'UPDATE_PROFILE_VALUE';
export const UPDATE_REGISTRATION_VALUE = 'UPDATE_REGISTRATION_VALUE';
export const REMOVE_LOG_INFO = 'REMOVE_LOG_INFO';
export const GET_FAVORITES_DATA = 'GET_FAVORITES_DATA';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const FAVORITES_LOADED = 'FAVORITES_LOADED';
export const GET_READINGS_DATA = 'GET_READINGS_DATA';
export const SAVE_READINGS = 'SAVE_READINGS';
export const READINGS_LOADED = ' READINGS_LOADED';
export const GET_REVIEWS_DATA = 'GET_REVIEWS_DATA';
export const SAVE_REVIEWS = 'SAVE_REVIEWS';
export const REVIEWS_LOADED = 'REVIEWS_LOADED';
export const TOGGLE_POP_UP = 'TOGGLE_POP_UP';
export const UPDATE_FAVORITE_SEARCH_VALUE = 'UPDATE_FAVORITE_SEARCH_VALUE';
export const SEARCHED_FAVORITES_BOOKS_LIST = 'SEARCHED_FAVORITES_BOOKS_LIST';
export const HANDLE_REGISTRATION = 'HANDLE_REGISTRATION';
export const SAVE_USER_REGISTRATION = 'SAVE_USER_REGISTRATION';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const REMOVE_REGISTRATION_INFO = 'REMOVE_REGISTRATION_INFO';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SAVE_USER_PROFILE_DATA = 'SAVE_USER_PROFILE_DATA';
export const PROFILE_IS_LOADED = 'PROFILE_IS_LOADED';

export const profileIsLoaded = () => ({
  type: PROFILE_IS_LOADED,
});

export const saveUserProfileData = (email, picture, description, username, reviews) => ({
  type: SAVE_USER_PROFILE_DATA,
  email,
  picture,
  description,
  username,
  reviews,
});

export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const removeRegistrationInfo = () => ({
  type: REMOVE_REGISTRATION_INFO,
});

export const registrationError = () => ({
  type: REGISTRATION_ERROR,
});

export const saveUserRegistration = (username, email, description) => ({
  type: SAVE_USER_REGISTRATION,
  username: username,
  email: email,
  description: description,
});

export const handleRegistration = () => ({
  type: HANDLE_REGISTRATION,
});

export const searchedFavoritesBooksList = (booksList) => ({
  type: SEARCHED_FAVORITES_BOOKS_LIST,
  data: booksList,
});

export const updateFavoriteSearchValue = (identifier, newValue) => ({
  type: UPDATE_FAVORITE_SEARCH_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const togglePopUp = (bool) => ({
  type: TOGGLE_POP_UP,
  display: bool,
});

export const favoritesLoaded = () => ({
  type: FAVORITES_LOADED,
});

export const saveFavorites = (favorites) => ({
  type: SAVE_FAVORITES,
  data: favorites,
});

export const getFavoritesData = () => ({
  type: GET_FAVORITES_DATA,
});

export const getReadingsData = () => ({
  type: GET_READINGS_DATA,
});

export const saveReadings = (readings) => ({
  type: SAVE_READINGS,
  data: readings,
});

export const readingsLoaded = () => ({
  type: READINGS_LOADED,
});

export const getReviewsData = () => ({
  type: GET_REVIEWS_DATA,
});

export const saveReviews = (reviews) => ({
  type: SAVE_REVIEWS,
  data: reviews,
});

export const reviewsLoaded = () => ({
  type: REVIEWS_LOADED,
});

export const removeLogInfo = () => ({
  type: REMOVE_LOG_INFO,
});

export const updateRegistrationValue = (identifier, newValue) => ({
  type: UPDATE_REGISTRATION_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const updateProfileValue = (identifier, newValue) => ({
  type: UPDATE_PROFILE_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const updateLoginValue = (identifier, newValue) => ({
  type: UPDATE_LOGIN_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const saveUserData = (token, username) => ({
  type: SAVE_USER_DATA,
  token: token,
  username: username,
});

export const loggingError = () => ({
  type: LOGGING_ERROR,
});
