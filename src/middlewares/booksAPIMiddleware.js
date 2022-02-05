import axios from 'axios';

import {
  GET_BOOKS_DATA,
  saveBooksList,
  booksListLoaded,
} from '../actions/books';

import {
  GET_SUGGESTIONS_DATA,
  saveSuggestions,
  suggestionsLoaded,
} from '../actions/suggestions';

const booksAPIMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_BOOKS_DATA:
      // Get all the books data
      axios.get(
        // URL
        'http://localhost:8000/api/books',
      )
        .then((booksList) => {
          console.log(booksList);
          store.dispatch(saveBooksList(booksList.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(booksListLoaded());
        });
      break;
    case GET_SUGGESTIONS_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/books',
      )
        .then((suggestions) => {
          store.dispatch(saveSuggestions(suggestions.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          suggestionsLoaded();
        });
      break;
    default:
  }

  next(action);
};

export default booksAPIMiddleware;
