export const UPDATE_LOGIN_VALUE = 'UPDATE_LOGIN_VALUE';

export const updateLoginValue = (identifier, newValue) => ({
  type: UPDATE_LOGIN_VALUE,
  identifier: identifier,
  newValue: newValue,
});
