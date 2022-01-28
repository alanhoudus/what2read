import {
  UPDATE_LOGIN_VALUE,
  SAVE_USER_DATA,
  LOGGING_ERROR,
  LOG_OUT,
} from 'src/actions/user';

export const initialState = {
  logged: true,
  email: '',
  password: '',
  token: '',
  loggingError: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        logged: action.isLogged,
      };
    case LOGGING_ERROR:
      return {
        ...state,
        loggingError: true,
      };
    case LOG_OUT:
      return {
        ...state,
        logged: false,
        nickname: '',
        email: '',
        description: '',
        password: '',
        confirmationPassword: '',
        token: '',
      };
    default:
      return state;
  }
};

export default reducer;
