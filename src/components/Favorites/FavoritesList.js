import PropTypes from 'prop-types';
import FavoriteBook from './FavoriteBook';

const FavoriteList = ({ favoritesList }) => (
  favoritesList.map((book) => (
    <FavoriteBook key={book.key} book={book} />
  ))
);

FavoriteList.protoTypes = {
  favoritesList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FavoriteList;
