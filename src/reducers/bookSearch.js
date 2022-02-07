import {
  ADD_READING_SEARCHED_BOOKS_LIST,
  SEARCHED_BOOKS_LIST,
  UPDATE_ADD_READING_VALUE,
  UPDATE_FAST_SEARCH_BOOK_VALUE,
  UPDATE_SEARCH_BOOK_VALUE,
} from '../actions/search';
import { TOGGLE_POP_UP } from '../actions/user';

export const initialState = {
  inputFastSearch: '',
  inputSearch: '',
  searchedBooksList: [],
  addReadingInputSearch: '',
  addReadingSearchedBooksList: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_POP_UP:
      return {
        ...state,
        addReadingInputSearch: '',
        addReadingSearchedBooksList: [],
      };
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
    case UPDATE_ADD_READING_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SEARCHED_BOOKS_LIST:
      return {
        ...state,
        searchedBooksList: action.data,
      };
    case ADD_READING_SEARCHED_BOOKS_LIST:
      return {
        ...state,
        addReadingSearchedBooksList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
