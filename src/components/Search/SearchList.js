import PropTypes from 'prop-types';
import SearchItem from './SearchItem';

const SearchList = ({ searchedBooksList }) => (
  // For each searchedBook in the list, create an item
  searchedBooksList.map((book) => (
    <SearchItem key={book.isbn} searchedBook={book} />
  ))
);

SearchList.propTypes = {
  searchedBooksList: PropTypes.arrayOf(
    PropTypes.shape({
      isbn: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SearchList;
