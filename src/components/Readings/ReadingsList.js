import PropTypes from 'prop-types';
import ReadingItem from './ReadingItem';

const ReadingsList = ({ readingsList }) => (
  // For each reading in the list, create an item
  readingsList.map((book) => (
    <ReadingItem key={book.cover} book={book} />
  ))
);

ReadingsList.propTypes = {
  readingsList: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReadingsList;
