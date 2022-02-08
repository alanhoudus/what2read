import {
  SAVE_BOOKS_LIST,
  BOOKS_LIST_LOADED,
  SAVE_REVIEW_BY_BOOK,
  SUGGEST_TODAYS_BOOK,
} from '../actions/books';

import {
  SAVE_SUGGESTIONS,
  SUGGESTIONS_LOADED,
} from '../actions/suggestions';

export const initialState = {
  booksList: [],
  booksListDataLoading: true,
  suggestionsList: [],
  suggestionsDataLoading: true,
  reviewsListByBook: [],
  suggestedBookOfTheDay: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_REVIEW_BY_BOOK:
      return {
        ...state,
        reviewsListByBook: action.review,
      };

    case SUGGEST_TODAYS_BOOK:
      return {
        ...state,
        suggestedBookOfTheDay: action.book,
      };
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
