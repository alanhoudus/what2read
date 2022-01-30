export const UPDATE_FAST_SEARCH_BOOK_VALUE = 'UPDATE_FAST_SEARCH_BOOK_VALUE';
export const UPDATE_SEARCH_BOOK_VALUE = 'UPDATE_SEARCH_BOOK_VALUE';

export const updateFastSearchBookValue = (newValue) => ({
  type: UPDATE_FAST_SEARCH_BOOK_VALUE,
  newValue: newValue,
});

export const updateSearchBookValue = (newValue) => ({
  type: UPDATE_SEARCH_BOOK_VALUE,
  newValue: newValue,
});
