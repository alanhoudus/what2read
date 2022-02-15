export const UPDATE_FAST_SEARCH_BOOK_VALUE = 'UPDATE_FAST_SEARCH_BOOK_VALUE';
export const UPDATE_SEARCH_BOOK_VALUE = 'UPDATE_SEARCH_BOOK_VALUE';
export const SEARCH_BOOK_BY_INPUT = 'SEARCH_BOOK_BY_INPUT';
export const SEARCHED_BOOKS_LIST = 'SEARCHED_BOOKS_LIST';
export const UPDATE_ADD_READING_VALUE = 'UPDATE_ADD_READING_VALUE';
export const ADD_READING_SEARCHED_BOOKS_LIST = 'ADD_READING_SEARCHED_BOOKS_LIST';

export const addReadingSearchedBooksList = (booksList) => ({
  type: ADD_READING_SEARCHED_BOOKS_LIST,
  data: booksList,
});

export const updateAddReadingValue = (newValue, identifier) => ({
  type: UPDATE_ADD_READING_VALUE,
  identifier,
  newValue,
});

export const searchedBooksList = (booksList) => ({
  type: SEARCHED_BOOKS_LIST,
  data: booksList,
});

export const searchBookByInput = () => ({
  type: SEARCH_BOOK_BY_INPUT,
});

export const updateFastSearchBookValue = (newValue) => ({
  type: UPDATE_FAST_SEARCH_BOOK_VALUE,
  newValue: newValue,
});

export const updateSearchBookValue = (newValue) => ({
  type: UPDATE_SEARCH_BOOK_VALUE,
  newValue: newValue,
});
