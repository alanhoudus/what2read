// react-router-dom
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const SearchItem = ({ searchedBook }) => (
  <div className="search-book">
    <Link
      to="/livre"
      key={searchedBook.key}
    >
      <h3 className="search-book--title">{searchedBook.title}</h3>
      <img className="search-img" src={searchedBook.cover} alt="title" />
    </Link>
  </div>
);

SearchItem.propTypes = {
  searchedBook: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchItem;
