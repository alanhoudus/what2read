/**
 * Searches among the books list the corresponding book that we clicked on in the search component
 * The list of books
 * @param {*} booksList
 * The ISBN of the book we clicked on
 * @param {*} searchedISBN
 * @returns object
 */
export function findBook(booksList, searchedISBN) {
  const book = booksList.find((testedBook) => testedBook.isbn === searchedISBN);
  return book;
}

/**
 * Filters in the list of books, using the users input to check for corresponding book
 * @param {array of objects} booksList
 * @param {string} userInput
 * @returns array of objects
 */
export const findSearchedBooks = (booksList, userInput) => {
  const searchTerm = userInput;
  return booksList.filter((book) => book.title.toLowerCase().match(searchTerm)
    || book.publisher.toLowerCase().match(searchTerm)
    || book.isbn.match(searchTerm)
    || book.authors.some((author) => author.name.toLowerCase().match(searchTerm))
    || book.genres.some((genre) => genre.name.toLowerCase().match(searchTerm)));
};

/**
 * Searches among the reviews list the corresponding review that
 * we clicked on in the reviews component
 * The list of reviews
 * @param {*} reviewsList
 * The id of the review we clicked on
 * @param {*} searchedId
 * @returns object
 */
export function findReview(reviewsList, searchedId) {
  const review = reviewsList.find((testedReview) => testedReview.id === searchedId);
  return review;
}

export function frenchizeDate(date) {
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);
  const newDate = new Date(Date.UTC(year, month, day));
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return newDate.toLocaleDateString('fr-FR', options);
}
