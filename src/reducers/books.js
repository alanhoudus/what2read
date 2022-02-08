import {
  SAVE_BOOKS_LIST,
  BOOKS_LIST_LOADED,
  SUGGEST_TODAYS_BOOK,
  SAVE_REVIEWS_LIST,
  ALL_REVIEWS_LOADED,
  SAVE_CARROUSEL_REVIEWS,
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
  suggestedBookOfTheDay: {},
  allReviews: [],
  allReviewsDataLoading: true,
  carrouselReviews: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CARROUSEL_REVIEWS:
      return {
        ...state,
        carrouselReviews: action.data,
      };
    case SUGGEST_TODAYS_BOOK:
      return {
        ...state,
        suggestedBookOfTheDay: action.book,
      };
    case SAVE_REVIEWS_LIST:
      return {
        ...state,
        allReviews: action.data,
      };
    case SAVE_BOOKS_LIST:
      return {
        ...state,
        booksList: action.data,
      };
    case ALL_REVIEWS_LOADED:
      return {
        ...state,
        allReviewsDataLoading: false,
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
