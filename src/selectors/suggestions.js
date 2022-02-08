function pickRandomBookNotSuggested(booksList, suggestedHistory) {
  // eslint-disable-next-line max-len
  const booksNotSuggested = booksList.filter((book) => !suggestedHistory.some((suggested) => (suggested.book.isbn === book.isbn)));
  const randomNumber = Math.floor(Math.random() * (booksList.length - 1));

  // const hasBeenSuggested = {
  //   value: 'done',
  //   expiry: 5000,
  // };

  // localStorage.setItem('suggested', JSON.stringify((hasBeenSuggested)));
  return booksNotSuggested[randomNumber];
}

export default pickRandomBookNotSuggested;
