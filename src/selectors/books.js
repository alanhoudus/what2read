/**
 * Searches among the books list the corresponding book that we clicked on in the search component
 * The list of books
 * @param {*} booksList
 * The ISBN of the book we clicked on
 * @param {*} searchedISBN
 * @returns
 */
function findBook(booksList, searchedISBN) {
  const book = booksList.find((testedBook) => testedBook.isbn === searchedISBN);
  return book;
}

export default findBook;
