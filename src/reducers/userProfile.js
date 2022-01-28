import {
  UPDATE_PROFILE_VALUE,
  SAVE_USER_DATA,
} from 'src/actions/user';

export const initialState = {
  nickname: '',
  email: '',
  description: '',
  token: '',
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
    default:
      return state;
  }
};

export default reducer;
