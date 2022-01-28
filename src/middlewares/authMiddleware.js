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
    axios.post(
      // URL
      'http://localhost:3001/login',
      // données
      {
        email: store.getState().userLogin.email,
        password: store.getState().userLogin.password,
      },
    )
      .then((response) => {
        console.log(response);
        store.dispatch(saveUserData(
          response.data.pseudo,
          response.data.token,
          response.data.logged,
        ));
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(loggingError());
      })
      .finally(() => {
        window.setTimeout(() => {
          store.dispatch(removeLogInfo());
        }, 7000);
      });
  }

  next(action);
};

export default authMiddleware;
