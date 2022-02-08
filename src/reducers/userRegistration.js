import {
  UPDATE_REGISTRATION_VALUE,
  SAVE_USER_REGISTRATION,
  REGISTRATION_ERROR,
  REMOVE_REGISTRATION_INFO,
  HANDLE_USER_ALREADY_EXIST,
} from 'src/actions/user';

export const initialState = {
  username: '',
  email: '',
  password: '',
  confirmationPassword: '',
  description: '',
  registrationError: false,
  registrationSuccess: false,
  registrationMessage: 'Inscription validée',
  userExistError: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_REGISTRATION_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SAVE_USER_REGISTRATION:
      return {
        ...state,
        username: '',
        email: '',
        password: '',
        confirmationPassword: '',
        description: '',
        registrationError: false,
        registrationSuccess: true,
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        registrationError: true,
      };
    case REMOVE_REGISTRATION_INFO:
      return {
        ...state,
        registrationSuccess: false,
      };
    case HANDLE_USER_ALREADY_EXIST:
      return {
        ...state,
        userExistError: true,
      };
    default:
      return state;
  }
};

export default reducer;
