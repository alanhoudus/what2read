import { OTHER_PROFILE_LOADED, SAVE_OTHER_PROFILE_DATA } from '../actions/user';

export const initialState = {
  username: '',
  description: '',
  picture: '',
  reviews: [],
  otherProfileIsLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OTHER_PROFILE_LOADED:
      return {
        ...state,
        otherProfileIsLoading: false,
      };
    case SAVE_OTHER_PROFILE_DATA:
      return {
        ...state,
        username: action.username,
        description: action.description,
        picture: action.picture,
        reviews: action.reviews,
      };
    default:
      return state;
  }
};

export default reducer;
