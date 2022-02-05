/* eslint-disable no-console */
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { HANDLE_POST_REVIEW, handleEmptyInput } from '../actions/addReview';
import {
  EDIT_USER_PROFILE,
  GET_USER_DATA,
  profileIsLoaded,
  saveUserProfileData,
} from '../actions/user';

const profilApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_POST_REVIEW: {
      const { isbn } = store.getState().addReview;
      axios.post(
        // URL
        `http://localhost:8000/api/${isbn}/addreview`,
        // données
        {
          title: store.getState().addReview.title,
          content: store.getState().addReview.content,
          book_isbn: isbn,
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
          console.log(store.getState().userProfile.token);
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
    default:
  }
  next(action);
};

export default profilApiMiddleware;
