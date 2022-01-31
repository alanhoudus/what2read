import {
  SAVE_BOOKS_LIST,
  DATA_LOADED,
} from 'src/actions/books';

export const initialState = {
  booksList: [],
  dataLoading: false,
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
        dataLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
