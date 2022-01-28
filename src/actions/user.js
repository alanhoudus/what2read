export const UPDATE_LOGIN_VALUE = 'UPDATE_LOGIN_VALUE';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const LOGGING_ERROR = 'LOGGING_ERROR';
export const LOG_OUT = 'LOG_OUT';

export const logOut = () => ({
  type: LOG_OUT,
});

export const updateLoginValue = (identifier, newValue) => ({
  type: UPDATE_LOGIN_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const saveUserData = (nickname, token, isLogged) => ({
  type: SAVE_USER_DATA,
  isLogged: isLogged,
  nickname: nickname,
  token: token,
});

export const loggingError = () => ({
  type: LOGGING_ERROR,
});
