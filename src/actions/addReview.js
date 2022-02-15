export const UPDATE_TITLE_WRITE_REVIEW = 'UPDATE_TITLE_WRITE_REVIEW';
export const UPDATE_WRITE_REVIEW = 'UPDATE_WRITE_REVIEW';
export const HANDLE_POST_REVIEW = 'HANDLE_POST_REVIEW';
export const HANDLE_EMPTY_INPUT = 'HANDLE_EMPTY_INPUT';
export const EDIT_FIELD_REVIEW = 'EDIT_FIELD_REVIEW';
export const SEND_EDITED_REVIEW = 'SEND_EDITED_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const DISPLAY_EDITED_REVIEW_CONTENT = 'DISPLAY_EDITED_REVIEW_CONTENT';

export const displayEditedReviewContent = (title, content) => ({
  type: DISPLAY_EDITED_REVIEW_CONTENT,
  title,
  content,
});

export const removeReview = (id) => ({
  type: REMOVE_REVIEW,
  id,
});

export const sendEditedReview = (id) => ({
  type: SEND_EDITED_REVIEW,
  id,
});

export const editFieldReview = (identifier, newValue) => ({
  type: EDIT_FIELD_REVIEW,
  identifier,
  newValue,
});

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

export const handlePostReview = (isbn) => ({
  type: HANDLE_POST_REVIEW,
  isbn,
});

export const handleEmptyInput = () => ({
  type: HANDLE_EMPTY_INPUT,
});
