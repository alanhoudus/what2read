import PropTypes from 'prop-types';
import SearchItem from './SearchItem';

const SearchList = ({ searchedBooksList }) => (
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
