import axios from 'axios';

import {
  GET_BOOKS_DATA,
  saveBooksList,
  booksListLoaded,
} from '../actions/books';

import {
  GET_FAVORITES_DATA,
  saveFavorites,
  favoritesLoaded,
} from '../actions/user';

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
    case GET_FAVORITES_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/books',
      )
        .then((favorites) => {
          store.dispatch(saveFavorites(favorites.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          favoritesLoaded();
        });
      break;
    default:
  }

  next(action);
};

export default recipesAPIMiddleware;
