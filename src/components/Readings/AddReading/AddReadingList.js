import PropTypes from 'prop-types';
import AddReadingItem from './AddReadingItem';

const AddReadingList = ({ addReadingBooksList }) => (
  // For each result in the list, create an item
  addReadingBooksList.map((book) => (
    <AddReadingItem key={book.isbn} book={book} />
  ))
);

AddReadingList.protoTypes = {
  addReadingBooksList: PropTypes.arrayOf(
    PropTypes.shape({
      book: PropTypes.shape({
        isbn: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default AddReadingList;
