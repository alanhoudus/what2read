import {
  UPDATE_FAST_SEARCH_BOOK_VALUE,
  UPDATE_SEARCH_BOOK_VALUE,
} from '../actions/search';

export const initialState = {
  inputFastSearch: '',
  inputSearch: '',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FAST_SEARCH_BOOK_VALUE:
      return {
        ...state,
        inputFastSearch: action.newValue,
      };
    case UPDATE_SEARCH_BOOK_VALUE:
      return {
        ...state,
        inputSearch: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
