// hooks
import { useDispatch, useSelector } from 'react-redux';
// import components
import Loader from '../App/Loader';
import SearchList from './SearchList';
import SearchField from '../Reusables/SearchField';

// actions
import { searchedBooksList, updateSearchBookValue } from '../../actions/search';

// selectors
import { findSearchedBooks } from '../../selectors/books';

// import scss
import './search.scss';

const Search = () => {
  const searchedBooks = useSelector((state) => state.bookSearch.searchedBooksList);
  const isLoading = useSelector((state) => state.books.booksListDataLoading);
  const userInput = useSelector((state) => state.bookSearch.inputSearch);
  const booksList = useSelector((state) => state.books.booksList);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="search">
      <form
        className="search-input"
        onSubmit={(e) => {
          e.preventDefault();
          const userSearchedBooksList = findSearchedBooks(booksList, userInput);
          dispatch(searchedBooksList(userSearchedBooksList));
        }}
      >
        <SearchField
          type="text"
          className="search--field"
          name="inputSearch"
          id="inputSearch"
          placeholder="Ma recherche..."
          value={userInput}
          onChange={(identifier, newValue) => {
            const action = updateSearchBookValue(identifier, newValue);
            dispatch(action);
            const userSearchedBooksList = findSearchedBooks(booksList, userInput);
            dispatch(searchedBooksList(userSearchedBooksList));
          }}
        />
      </form>
      <div className="search-books">
        <SearchList searchedBooksList={searchedBooks} />
      </div>
    </div>
  );
};

export default Search;
