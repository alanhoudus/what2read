import {
  UPDATE_PROFILE_VALUE,
  SAVE_USER_DATA,
  SAVE_FAVORITES,
  FAVORITES_LOADED,
  SAVE_READINGS,
  READINGS_LOADED,
  SAVE_REVIEWS,
  REVIEWS_LOADED,
  TOGGLE_POP_UP,
  UPDATE_FAVORITE_SEARCH_VALUE,
  SEARCHED_FAVORITES_BOOKS_LIST,
  LOG_OUT,
} from '../actions/user';

export const initialState = {
  username: '',
  email: '',
  description: '',
  token: false,
  favorites: [],
  favoritesLoading: true,
  readings: [],
  readingsLoading: true,
  reviews: [],
  reviewsLoading: true,
  addBookPopUp: false,
  searchFavoriteInput: '',
  searchedFavoritesBooksList: [],
  logged: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PROFILE_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        logged: true,
        token: action.token,
        username: action.username,
        description: 'J\'me présente. Je m\'appelle alan. J\'voudrais bien réussir ma vie. Être aimé !',
      };
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.data,
      };
    case FAVORITES_LOADED:
      return {
        ...state,
        favoritesLoading: false,
      };
    case SAVE_READINGS:
      return {
        ...state,
        readings: action.data,
      };
    case READINGS_LOADED:
      return {
        ...state,
        favoritesLoading: false,
      };
    case SAVE_REVIEWS:
      return {
        ...state,
        reviews: action.data,
      };
    case REVIEWS_LOADED:
      return {
        ...state,
        reviewsLoading: false,
      };
    case TOGGLE_POP_UP:
      return {
        ...state,
        addBookPopUp: action.display,
      };
    case UPDATE_FAVORITE_SEARCH_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SEARCHED_FAVORITES_BOOKS_LIST:
      return {
        ...state,
        favorites: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;
