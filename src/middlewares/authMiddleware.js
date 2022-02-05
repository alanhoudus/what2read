/* eslint-disable no-console */
import axios from 'axios';
import {
  HANDLE_LOGIN,
  saveUserData,
  loggingError,
  removeLogInfo,
  HANDLE_REGISTRATION,
  saveUserRegistration,
  removeRegistrationInfo,
} from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Send the username and password stored in the state to the API
    case HANDLE_LOGIN:
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
      break;
    case HANDLE_REGISTRATION:
      axios.post(
        // URL
        'http://localhost:8000/api/registration',
        // données
        {
          username: store.getState().userRegistration.username,
          email: store.getState().userRegistration.email,
          password: store.getState().userRegistration.password,
          presentation: store.getState().userRegistration.description,
          picture: store.getState().userProfile.picture,
        },
      )
        .then((response) => {
          store.dispatch(saveUserRegistration(
            response.data.username,
            response.data.email,
            response.data.description,
          ));
          console.log(response);
        })
        .catch((error) => {
          console.log(error.toJSON());
        })
        .finally(() => {
          window.setTimeout(() => {
            store.dispatch(removeRegistrationInfo());
          }, 7000);
        });
      break;
    default:
  }

  next(action);
};

export default authMiddleware;
