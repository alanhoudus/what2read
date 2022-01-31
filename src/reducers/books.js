import {
  SAVE_BOOKS_LIST,
  BOOKS_LIST_LOADED,
} from '../actions/books';

export const initialState = {
  booksList: [],
  searchedBook: {},
  booksListDataLoading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOKS_LIST:
      return {
        ...state,
        booksList: action.data,
      };
    case BOOKS_LIST_LOADED:
      return {
        ...state,
        booksListDataLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
