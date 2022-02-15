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
  SAVE_USER_PROFILE_DATA,
  PROFILE_IS_LOADED,
  SAVE_USER_FAVORITES_DATA,
  SAVE_USER_REVIEWS_DATA,
  SAVE_USER_READINGS_DATA,
} from 'src/actions/user';

export const initialState = {
  username: '',
  email: '',
  description: '',
  token: false,
  picture: 'https://media.giphy.com/media/QSwf0L2iUbfJlA0L5n/giphy.gif',
  favorites: [],
  favoritesLoading: true,
  readings: [],
  readingsLoading: true,
  reviews: [],
  reviewsLoading: true,
  addBookPopUp: false,
  searchFavoriteInput: '',
  searchedFavoritesBooksList: [],
  profileIsLoading: true,
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_PROFILE_DATA:
      return {
        ...state,
        email: action.email,
        picture: action.picture,
        description: action.description,
        username: action.username,
        reviews: action.reviews,
      };
    case PROFILE_IS_LOADED:
      return {
        ...state,
        profileIsLoading: false,
      };
    case SAVE_USER_FAVORITES_DATA:
      return {
        ...state,
        favorites: action.favorites,
      };
    case SAVE_USER_REVIEWS_DATA:
      return {
        ...state,
        reviews: action.reviews,
      };
    case SAVE_USER_READINGS_DATA:
      return {
        ...state,
        readings: action.readings,
      };
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
        readingsLoading: false,
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
