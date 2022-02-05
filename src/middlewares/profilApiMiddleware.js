/* eslint-disable no-console */
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { HANDLE_POST_REVIEW, handleEmptyInput } from '../actions/addReview';
import { GET_USER_DATA } from '../actions/user';

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
