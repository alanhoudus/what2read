export const GET_BOOKS_DATA = 'GET_BOOKS_DATA';
export const SAVE_BOOKS_LIST = 'SAVE_BOOKS_LIST';

export const getBooksData = () => ({
  type: GET_BOOKS_DATA,
});

export const saveBooksList = (booksList) => ({
  type: SAVE_BOOKS_LIST,
  data: booksList,
});
