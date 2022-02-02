export const GET_BOOKS_DATA = 'GET_BOOKS_DATA';
export const SAVE_BOOKS_LIST = 'SAVE_BOOKS_LIST';
export const BOOKS_LIST_LOADED = 'BOOKS_LIST_LOADED';
export const GET_AUTHORS_DATA = 'GET_AUTHORS_DATA';
export const GET_GENRES_DATA = 'GET_GENRES_DATA';
export const SAVE_AUTHORS = 'SAVE_AUTHORS';
export const SAVE_GENRES = 'SAVE_GENRES';

export const saveGenres = (genres) => ({
  type: SAVE_GENRES,
  genres,
});

export const saveAuthors = (authors) => ({
  type: SAVE_AUTHORS,
  authors,
});

export const getGenresData = () => ({
  type: GET_GENRES_DATA,
});

export const getAuthorsData = () => ({
  type: GET_AUTHORS_DATA,
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
