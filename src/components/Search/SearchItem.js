// hooks
import { useDispatch } from 'react-redux';

// react-router-dom
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

// actions
import { getBookData } from '../../actions/books';

const SearchItem = ({ searchedBook }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="search-book"
      onClick={(() => {
        dispatch(getBookData(searchedBook.isbn));
      })}
    >
      <Link
        to={`/livre/${searchedBook.isbn}`}
        key={searchedBook.isbn}
      >
        <img className="search-book cover" src={searchedBook.cover} alt="title" />
        <h3 className="search-book--title">{searchedBook.title}</h3>
        <h3 className="search-book--subtitle">{searchedBook.subtitle}</h3>
      </Link>
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
