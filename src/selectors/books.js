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
