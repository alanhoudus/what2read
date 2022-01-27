import { UPDATE_LOGIN_VALUE } from 'src/actions/user';

export const initialState = {
  logged: false,
  nickname: '',
  email: '',
  description: '',
  password: '',
  confirmationPassword: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
