import PropTypes from 'prop-types';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';

const FavoriteBook = ({ book }) => (
  <Link
    to="/livre"
    key={book.key}
  >
    <div className="favorites-book">
      <div className="favorites-book--cover">
        <img src={book.cover} alt="Couverture du livre favori" />
        <Star className="favorites-star" color="gold" size="40" />
      </div>
      <h2>{book.title}</h2>
    </div>
  </Link>
);

FavoriteBook.propTypes = {
  book: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteBook;
