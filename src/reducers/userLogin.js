import {
  UPDATE_LOGIN_VALUE,
  SAVE_USER_DATA,
  LOGGING_ERROR,
  LOG_OUT,
  REMOVE_LOG_INFO,
} from 'src/actions/user';

export const initialState = {
  logged: true,
  logInfo: false,
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
        loggingError: false,
        logInfo: true,
      };
    case LOGGING_ERROR:
      return {
        ...state,
        loggingError: true,
      };
    case REMOVE_LOG_INFO:
      return {
        ...state,
        logInfo: false,
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
        loginfo: false,
      };
    default:
      return state;
  }
};

export default reducer;
