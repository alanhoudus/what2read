import {
  UPDATE_TITLE_WRITE_REVIEW,
  UPDATE_WRITE_REVIEW,
  HANDLE_EMPTY_INPUT,
} from '../actions/addReview';

export const initialState = {
  title: '',
  content: '',
  isbn: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_TITLE_WRITE_REVIEW:
      return {
        ...state,
        isbn: action.isbn,
        title: action.title,
      };
    case UPDATE_WRITE_REVIEW:
      return {
        ...state,
        isbn: action.isbn,
        content: action.content,
      };
    case HANDLE_EMPTY_INPUT:
      return {
        ...state,
        title: '',
        content: '',
        isbn: '',
      };
    default:
      return state;
  }
};

export default reducer;
