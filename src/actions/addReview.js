export const UPDATE_TITLE_WRITE_REVIEW = 'UPDATE_TITLE_WRITE_REVIEW';
export const UPDATE_WRITE_REVIEW = 'UPDATE_WRITE_REVIEW';
export const HANDLE_POST_REVIEW = 'HANDLE_POST_REVIEW';
export const HANDLE_EMPTY_INPUT = 'HANDLE_EMPTY_INPUT';

export const updateTitleWriteReview = (newIsbn, newTitle) => ({
  type: UPDATE_TITLE_WRITE_REVIEW,
  isbn: newIsbn,
  title: newTitle,
});

export const updateWriteReview = (newIsbn, newContent) => ({
  type: UPDATE_WRITE_REVIEW,
  isbn: newIsbn,
  content: newContent,
});

export const handlePostReview = () => ({
  type: HANDLE_POST_REVIEW,
});

export const handleEmptyInput = () => ({
  type: HANDLE_EMPTY_INPUT,
});
