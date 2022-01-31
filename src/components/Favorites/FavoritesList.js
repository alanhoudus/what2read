import PropTypes from 'prop-types';
import FavoriteBook from './FavoriteBook';

const FavoriteList = ({ favoritesList }) => (
  favoritesList.map((book) => (
    <FavoriteBook key={book.isbn} book={book} />
  ))
);

FavoriteList.protoTypes = {
  favoritesList: PropTypes.arrayOf(
    PropTypes.shape({
      isbn: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FavoriteList;
