import PropTypes from 'prop-types';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';
// hooks
import { useDispatch, useSelector } from 'react-redux';
// action
import { deleteFavorisUser } from '../../actions/user';

const FavoriteBook = ({ book }) => {
  const favorites = useSelector((state) => state.userProfile.favorites);
  const dispatch = useDispatch();
  return (
    <div className="favorites-book">
      <Link
        to={`/livre/${book.isbn}`}
        key={book.isbn}
      >
        <div className="favorites-book--cover">
          <img src={book.cover} alt="Couverture du livre favori" />
        </div>
        <h3>{book.title}</h3>
        <h4>{book.subtitle}</h4>
      </Link>
      <Star
        className="favorites-star"
        color="gold"
        size="40"
        onClick={() => {
          dispatch(deleteFavorisUser(favorites.id));
          console.log(favorites.id[0]);
          console.log('je delete');
        }}
      />
    </div>
  );
};

FavoriteBook.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }).isRequired,
};

export default FavoriteBook;
