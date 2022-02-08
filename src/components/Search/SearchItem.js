import { Star } from 'react-feather';
// hooks
import { useDispatch, useSelector } from 'react-redux';
// react-router-dom
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// action
import { addFavorisUser } from '../../actions/user';

const SearchItem = ({ searchedBook }) => {
  const isLogged = useSelector((state) => state.userProfile.logged);
  const dispatch = useDispatch();
  return (
    <div
      className="search-book"
    >
      <Link
        to={`/livre/${searchedBook.isbn}`}
        key={searchedBook.isbn}
      >
        <div className="search-book cover">
          <img className="search-book cover-img" src={searchedBook.cover} alt="title" />
        </div>
        <h3 className="search-book--title">{searchedBook.title}</h3>
        <h4 className="search-book--subtitle">{searchedBook.subtitle}</h4>
      </Link>
      {isLogged && (
        <Star
          className="search-book-starAdd"
          color="gold"
          size="40"
          onClick={() => {
            dispatch(addFavorisUser(searchedBook.isbn));
          }}
        />
      )}
    </div>
  );
};
SearchItem.propTypes = {
  searchedBook: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }).isRequired,
};

export default SearchItem;
