import {
  SAVE_BOOKS_LIST,
  DATA_LOADED,
} from '../actions/books';

export const initialState = {
  booksList: [],
  dataLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOKS_LIST:
      return {
        ...state,
        booksList: action.data,
      };
    case DATA_LOADED:
      return {
        ...state,
        dataLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
