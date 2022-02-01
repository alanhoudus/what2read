import {
  UPDATE_PROFILE_VALUE,
  SAVE_USER_DATA,
  SAVE_FAVORITES,
  FAVORITES_LOADED,
  SAVE_READINGS,
  READINGS_LOADED,
} from 'src/actions/user';

export const initialState = {
  nickname: '',
  email: '',
  description: '',
  token: '',
  favorites: [],
  favoritesLoading: true,
  readings: [],
  readingsLoading: true,
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
        logged: action.isLogged,
        token: action.token,
        nickname: action.nickname,
        description: 'J\'me présente. Je m\'appelle John. J\'voudrais bien réussir ma vie. Être aimé !',
        password: '',
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
    default:
      return state;
  }
};

export default reducer;
