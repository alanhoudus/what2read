function comparePasswords(password, confirmationPassword) {
  if (password === confirmationPassword) {
    return true;
  }
  return false;
}

export default comparePasswords;
