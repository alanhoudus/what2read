import PropTypes from 'prop-types';
import ReadingItem from './ReadingItem';

const ReadingsList = ({ readingsList }) => (
  // For each reading in the list, create an item
  readingsList.map((book) => (
    <ReadingItem key={book.book.isbn} book={book.book} />
  ))
);

ReadingsList.propTypes = {
  readingsList: PropTypes.arrayOf(
    PropTypes.shape({
      book: PropTypes.shape({
        isbn: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReadingsList;
