export const UPDATE_TITLE_WRITE_REVIEW = 'UPDATE_TITLE_WRITE_REVIEW';
export const UPDATE_WRITE_REVIEW = 'UPDATE_WRITE_REVIEW';

export const updateTitleWriteReview = (newValue) => ({
  type: UPDATE_TITLE_WRITE_REVIEW,
  newValue: newValue,
});

export const updateWriteReview = (newValue) => ({
  type: UPDATE_WRITE_REVIEW,
  newValue: newValue,
});