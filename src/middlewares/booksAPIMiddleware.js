import axios from 'axios';

import {
  GET_BOOKS_DATA,
  saveBooksList,
  booksListLoaded,
  GET_BOOK_DATA,
  saveBook,
} from '../actions/books';

const recipesAPIMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_BOOKS_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/books',

      )
        .then((booksList) => {
          store.dispatch(saveBooksList(booksList.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(booksListLoaded());
        });
      break;
    case GET_BOOK_DATA:
      axios.get(
        // URL
        `http://localhost:8000/api/book/${action.data}`,
      )
        .then((book) => {
          store.dispatch(saveBook(book.data));
          console.log(book);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  next(action);
};

export default recipesAPIMiddleware;
