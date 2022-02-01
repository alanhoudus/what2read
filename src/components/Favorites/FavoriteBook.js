import PropTypes from 'prop-types';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';

const FavoriteBook = ({ book }) => (
  <div className="favorites-book">
    <Link
      to={`/livre/${book.isbn}`}
      key={book.isbn}
    >
      <div className="favorites-book--cover">
        <img src={book.cover} alt="Couverture du livre favori" />
        <Star className="favorites-star" color="gold" size="40" />
      </div>
      <h3>{book.title}</h3>
      <h4>{book.subtitle}</h4>
    </Link>
  </div>
);

FavoriteBook.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }).isRequired,
};

export default FavoriteBook;
