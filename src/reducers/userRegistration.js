import {
  UPDATE_REGISTRATION_VALUE,
} from 'src/actions/user';

export const initialState = {
  nickname: '',
  email: '',
  description: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_REGISTRATION_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    default:
      return state;
  }
};

export default reducer;
