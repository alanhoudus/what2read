export const GET_BOOKS_DATA = 'GET_BOOKS_DATA';
export const SAVE_BOOKS_LIST = 'SAVE_BOOKS_LIST';
export const BOOKS_LIST_LOADED = 'BOOKS_LIST_LOADED';

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
