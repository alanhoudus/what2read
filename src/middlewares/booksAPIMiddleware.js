import axios from 'axios';

import {
  GET_BOOKS_DATA,
  saveBooksList,
  dataLoaded,
} from '../actions/books';

const recipesAPIMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_BOOKS_DATA) {
    axios.get(
      // URL
      'https://www.googleapis.com/books/v1/volumes?q=tolkiens',

    )
      .then((booksList) => {
        store.dispatch(saveBooksList(booksList.data.items));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        store.dispatch(dataLoaded());
      });
  }

  next(action);
};

export default recipesAPIMiddleware;
