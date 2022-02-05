import PropTypes from 'prop-types';
import FavoriteBook from './FavoriteBook';

const FavoriteList = ({ favoritesList }) => (
  // For each favorite in the list, create an item
  favoritesList.map((book) => (
    <FavoriteBook key={book.book.isbn} book={book.book} />
  ))
);

FavoriteList.protoTypes = {
  favoritesList: PropTypes.arrayOf(
    PropTypes.shape({
      book: PropTypes.shape({
        isbn: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default FavoriteList;
