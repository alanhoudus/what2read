/* eslint-disable no-console */
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import {
  HANDLE_POST_REVIEW,
  handleEmptyInput,
  REMOVE_REVIEW,
  SEND_EDITED_REVIEW,
} from '../actions/addReview';
import {
  ADD_BOOK_TO_READINGS,
  EDIT_USER_PROFILE,
  favoritesLoaded,
  GET_USER_DATA,
  GET_USER_FAVORITES_DATA,
  GET_USER_READINGS_DATA,
  GET_USER_REVIEWS_DATA,
  profileIsLoaded,
  readingsLoaded,
  REMOVE_BOOK_FROM_READINGS,
  reviewsLoaded,
  saveUserFavoritesData,
  saveUserProfileData,
  saveUserReadingsData,
  saveUserReviewsData,
  ADD_FAVORIS_USER,
  DELETE_FAVORIS_USER,
  DELETE_USER_ACCOUNT,
} from '../actions/user';

const profilApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_POST_REVIEW: {
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
    case REMOVE_REVIEW: {
      axios.delete(
        // URL
        `http://localhost:8000/api/profile/review/${action.id}`,
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
          console.log("user", response);
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
          store.dispatch(saveUserReviewsData(
            response.data,
          ));
        })
        .catch((error) => {
          console.log(error.toJSON());
        })
        .finally(() => {
          store.dispatch(reviewsLoaded());
        });
      break;
    }
    case ADD_BOOK_TO_READINGS: {
      axios.post(
        // URL
        `http://localhost:8000/api/profile/${action.isbn}/addreading`,
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
        });
      break;
    }
    case REMOVE_BOOK_FROM_READINGS: {
      axios.delete(
        // URL
        `http://localhost:8000/api/profile/reading/${action.id}`,
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
    case SEND_EDITED_REVIEW: {
      axios.put(
        // URL
        `http://localhost:8000/api/profile/review/${action.id}`,
        {
          title: store.getState().addReview.editTitle,
          content: store.getState().addReview.editContent,
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
    case DELETE_FAVORIS_USER: {
      axios.delete(
        // URL
        `http://localhost:8000/api/profile/favorite/${action.id}`,
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
    case DELETE_USER_ACCOUNT: {
      axios.delete(
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
        })
        .catch((error) => {
          console.log(error.toJSON());
        });
      break;
    }
    default:
  }
  next(action);
};

export default profilApiMiddleware;
