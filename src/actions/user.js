export const UPDATE_LOGIN_VALUE = 'UPDATE_LOGIN_VALUE';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const LOGGING_ERROR = 'LOGGING_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_PROFILE_VALUE = 'UPDATE_PROFILE_VALUE';
export const UPDATE_REGISTRATION_VALUE = 'UPDATE_REGISTRATION_VALUE';

export const updateRegistrationValue = (identifier, newValue) => ({
  type: UPDATE_REGISTRATION_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const updateProfileValue = (identifier, newValue) => ({
  type: UPDATE_PROFILE_VALUE,
  identifier: identifier,
  newValue: newValue,
});

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
