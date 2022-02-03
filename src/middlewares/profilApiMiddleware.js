/* eslint-disable no-console */
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { HANDLE_POST_REVIEW } from '../actions/addReview';
import { findBook } from '../selectors/books';

const profilApiMiddleware = (store) => (next) => (action) => {
  // // Get the isbn in the URL
  // const { isbn } = useParams();
  // const book = findBook(store.getState().books.booksList, isbn);
  switch (action.type) {
    case HANDLE_POST_REVIEW:
      axios.post(
        // URL
        'http://localhost:8000/api/9780123683540/addreview',
        // données
        {
          title: store.getState().addReview.title,
          content: store.getState().addReview.content,
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
    default:
  }
  next(action);
};

export default profilApiMiddleware;
