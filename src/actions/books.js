export const GET_BOOKS_DATA = 'GET_BOOKS_DATA';
export const SAVE_BOOKS_LIST = 'SAVE_BOOKS_LIST';
export const BOOKS_LIST_LOADED = 'BOOKS_LIST_LOADED';
export const GET_BOOK_DATA = 'GET_BOOK_DATA';
export const SAVE_BOOK = 'SAVE_BOOK';

export const saveBook = (book) => ({
  type: SAVE_BOOK,
  data: book,
});

export const getBookData = (isbn) => ({
  type: GET_BOOK_DATA,
  data: isbn,
});

export const booksListLoaded = () => ({
  type: BOOKS_LIST_LOADED,
});

export const getBooksData = () => ({
  type: GET_BOOKS_DATA,
});

export const saveBooksList = (booksList) => ({
  type: SAVE_BOOKS_LIST,
  data: booksList,
});
