/* eslint-disable no-console */
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { HANDLE_POST_REVIEW, handleEmptyInput } from '../actions/addReview';
import {
  EDIT_USER_PROFILE,
  favoritesLoaded,
  GET_USER_DATA,
  GET_USER_FAVORITES_DATA,
  GET_USER_READINGS_DATA,
  GET_USER_REVIEWS_DATA,
  profileIsLoaded,
  readingsLoaded,
  reviewsLoaded,
  saveUserFavoritesData,
  saveUserProfileData,
  saveUserReadingsData,
  saveUserReviewsData,
  ADD_FAVORIS_USER,
} from '../actions/user';

const profilApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_POST_REVIEW: {
      // console.log(action.isbn);
      axios.post(
        // URL
        `http://localhost:8000/api/profile/${action.isbn}/addreview`,
        // données
        {
          title: store.getState().addReview.title,
          content: store.getState().addReview.content,
          book_isbn: action.isbn,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().userProfile.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(handleEmptyInput());
          console.log(response);
        })
        .catch((error) => {
          console.log(error.toJSON());
        });
      break;
    }
    case GET_USER_DATA: {
      axios.get(
        // URL
        'http://localhost:8000/api/profile',
        {
          headers: {
            Authorization: `Bearer ${store.getState().userProfile.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserProfileData(
            response.data.email,
            response.data.picture,
            response.data.presentation,
            response.data.username,
            response.data.reviews,
          ));
        })
        .catch((error) => {
          console.log(error.toJSON());
        })
        .finally(() => {
          store.dispatch(profileIsLoaded());
        });
      break;
    }
    case GET_USER_FAVORITES_DATA: {
      axios.get(
        // URL
        'http://localhost:8000/api/profile/favorites',
        {
          headers: {
            Authorization: `Bearer ${store.getState().userProfile.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          console.log('favorites');
          store.dispatch(saveUserFavoritesData(
            response.data,
          ));
        })
        .catch((error) => {
          console.log(error.toJSON());
        })
        .finally(() => {
          store.dispatch(favoritesLoaded());
        });
      break;
    }
    case GET_USER_READINGS_DATA: {
      axios.get(
        // URL
        'http://localhost:8000/api/profile/readings',
        {
          headers: {
            Authorization: `Bearer ${store.getState().userProfile.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          console.log('readings');
          store.dispatch(saveUserReadingsData(
            response.data,
          ));
        })
        .catch((error) => {
          console.log(error.toJSON());
        })
        .finally(() => {
          store.dispatch(readingsLoaded());
        });
      break;
    }
    case GET_USER_REVIEWS_DATA: {
      axios.get(
        // URL
        'http://localhost:8000/api/profile/reviews',
        {
          headers: {
            Authorization: `Bearer ${store.getState().userProfile.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          console.log('reviews');
          store.dispatch(saveUserReviewsData(
            response.data,
          ));
        })
        .catch((error) => {
          console.log(error.toJSON());
        })
        .finally(() => {
          console.log('a');
          store.dispatch(reviewsLoaded());
        });
      break;
    }
    case EDIT_USER_PROFILE: {
      axios.put(
        // URL
        'http://localhost:8000/api/profile',
        {
          email: store.getState().userProfile.email,
          username: store.getState().userProfile.username,
          picture: store.getState().userProfile.picture,
          presentation: store.getState().userProfile.description,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().userProfile.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.toJSON());
        });
      break;
    }
    case ADD_FAVORIS_USER: {
      axios.post(
        // URL
        `http://localhost:8000/api/profile/${action.isbn}/addfavorite`,
        {
          book_isbn: action.isbn,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().userProfile.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.toJSON());
          console.log(action.isbn);
        });
      break;
    }
    default:
  }
  next(action);
};

export default profilApiMiddleware;
