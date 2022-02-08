export const GET_BOOKS_DATA = 'GET_BOOKS_DATA';
export const SAVE_BOOKS_LIST = 'SAVE_BOOKS_LIST';
export const BOOKS_LIST_LOADED = 'BOOKS_LIST_LOADED';
export const GET_REVIEWS_DATA = 'GET_REVIEWS_DATA';
export const SUGGEST_TODAYS_BOOK = 'SUGGEST_TODAYS_BOOK';

export const suggestTodaysBook = (book) => ({
  type: SUGGEST_TODAYS_BOOK,
  book,
});

export const getReviewsData = () => ({
  type: GET_REVIEWS_DATA,
});

export const booksListLoaded = () => ({
  type: BOOKS_LIST_LOADED,
});

export const getBooksData = () => ({
  type: GET_BOOKS_DATA,
});

/**
 * Store the array in the state
 * @param {Array of objects} booksList
 * @returns
 */
export const saveBooksList = (booksList) => ({
  type: SAVE_BOOKS_LIST,
  data: booksList,
});
