import PropTypes from 'prop-types';
import SearchItem from './SearchItem';

const SearchList = ({ searchedBooksList }) => (
  searchedBooksList.map((book) => (
    <SearchItem key={book.key} searchedBook={book} />
  ))
);

SearchList.propTypes = {
  searchedBooksList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SearchList;
