/* eslint-disable no-console */
import axios from 'axios';
import { HANDLE_LOGIN, saveUserData, loggingError } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === HANDLE_LOGIN) {
    axios.post(
      // URL
      'http://localhost:3001/login',
      // données
      {
        email: store.getState().user.nickname,
        password: store.getState().user.password,
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
      });
  }

  next(action);
};

export default authMiddleware;
