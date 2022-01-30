import {
  SAVE_BOOKS_LIST,
} from 'src/actions/books';

export const initialState = {
  booksList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOKS_LIST:
      return {
        ...state,
        booksList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
