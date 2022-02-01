/* eslint-disable no-console */
import axios from 'axios';
import {
  HANDLE_LOGIN,
  saveUserData,
  loggingError,
  removeLogInfo,
} from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === HANDLE_LOGIN) {
    // Send the username and password stored in the state to the API
    axios.post(
      // URL
      'http://localhost:8000/api/login_check',
      // données
      {
        username: store.getState().userLogin.username,
        password: store.getState().userLogin.password,
      },
    )
      .then((response) => {
        // If the inputs are correct, store the nickname, token etc into the state
        console.log(response);
        store.dispatch(saveUserData(
          response.data.token,
          store.getState().userLogin.username,
        ));
      })
      .catch((error) => {
        console.log(error.toJSON());
        // If there's an error, dispatch the loggingError action to display the error
        store.dispatch(loggingError());
      })
      .finally(() => {
        // Remove the ProfileConnexion component
        // Should be moved in the response
        window.setTimeout(() => {
          store.dispatch(removeLogInfo());
        }, 7000);
      });
  }

  next(action);
};

export default authMiddleware;
