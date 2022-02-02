import axios from 'axios';

import {
  GET_BOOKS_DATA,
  saveBooksList,
  booksListLoaded,
  GET_GENRES_DATA,
  saveGenres,
  saveAuthors,
  GET_AUTHORS_DATA,
} from '../actions/books';

import {
  GET_FAVORITES_DATA,
  GET_READINGS_DATA,
  GET_REVIEWS_DATA,
  saveFavorites,
  favoritesLoaded,
  saveReadings,
  readingsLoaded,
  saveReviews,
  reviewsLoaded,
} from '../actions/user';

import {
  GET_SUGGESTIONS_DATA,
  saveSuggestions,
  suggestionsLoaded,
} from '../actions/suggestions';
import { SEARCH_BOOK_BY_INPUT } from '../actions/search';

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
    case GET_READINGS_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/books',
      )
        .then((readings) => {
          store.dispatch(saveReadings(readings.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          readingsLoaded();
        });
      break;
    case GET_REVIEWS_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/books',
      )
        .then((reviews) => {
          store.dispatch(saveReviews(reviews.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          reviewsLoaded();
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
    case GET_AUTHORS_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/authors',
      )
        .then((authors) => {
          console.log(authors);
          store.dispatch(saveAuthors(authors.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case GET_GENRES_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/genres',
      )
        .then((genres) => {
          console.log(genres);
          store.dispatch(saveGenres(genres.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SEARCH_BOOK_BY_INPUT:
      axios.get(
        // URL
        `http://localhost:8000/api/books/${store.getState().bookSearch.inputSearch}/authors`,
      )
        .then((searchResults) => {
          console.log(searchResults);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  next(action);
};

export default booksAPIMiddleware;
