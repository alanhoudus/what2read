import {
  SAVE_BOOKS_LIST,
  BOOKS_LIST_LOADED,
} from '../actions/books';

import {
  SAVE_SUGGESTIONS,
  SUGGESTIONS_LOADED,
} from '../actions/suggestions';

export const initialState = {
  booksList: [],
  searchedBook: {},
  booksListDataLoading: true,
  suggestionsList: [],
  suggestionsDataLoading: true,
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
    case SAVE_SUGGESTIONS:
      return {
        ...state,
        suggestionsList: action.data,
      };
    case SUGGESTIONS_LOADED:
      return {
        ...state,
        suggestionsDataLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
