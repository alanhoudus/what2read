import { UPDATE_TITLE_WRITE_REVIEW, UPDATE_WRITE_REVIEW } from '../actions/addReview';

export const initialState = {
  inputTitleReview: '',
  inputContentReview: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_TITLE_WRITE_REVIEW:
      return {
        ...state,
        inputTitleReview: action.newValue,
      };
    case UPDATE_WRITE_REVIEW:
      return {
        ...state,
        inputContentReview: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
