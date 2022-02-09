import {
  UPDATE_TITLE_WRITE_REVIEW,
  UPDATE_WRITE_REVIEW,
  HANDLE_EMPTY_INPUT,
  EDIT_FIELD_REVIEW,
  DISPLAY_EDITED_REVIEW_CONTENT,
} from '../actions/addReview';

export const initialState = {
  title: '',
  content: '',
  isbn: '',
  editTitle: '',
  editContent: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_EDITED_REVIEW_CONTENT:
      return {
        ...state,
        editTitle: action.title,
        editContent: action.content,
      };
    case EDIT_FIELD_REVIEW:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case UPDATE_WRITE_REVIEW:
      return {
        ...state,
        isbn: action.isbn,
        content: action.content,
      };
    case UPDATE_TITLE_WRITE_REVIEW:
      return {
        ...state,
        isbn: action.isbn,
        title: action.title,
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
