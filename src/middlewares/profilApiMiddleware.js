/* eslint-disable no-console */
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { HANDLE_POST_REVIEW, handleEmptyInput } from '../actions/addReview';

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
          // If there's an error, dispatch the loggingError action to display the error
          // store.dispatch(loggingError());
        })
        .finally(() => {
          // Remove the ProfileConnexion component
          // Should be moved in the response
          // window.setTimeout(() => {
          //   store.dispatch(removeLogInfo());
          // }, 7000);
        });
      break;
    }
    default:
  }
  next(action);
};

export default profilApiMiddleware;
