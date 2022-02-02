// hooks
import { useDispatch, useSelector } from 'react-redux';
// import components
import ShowMore from '../Reusables/ShowMore';
import Loader from '../App/Loader';
import SearchList from './SearchList';
import SearchField from '../Reusables/SearchField';

// actions
import { searchedBooksList } from '../../actions/search';

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
        <SearchField />
      </form>
      <div className="search-books">
        <SearchList searchedBooksList={searchedBooks} />
      </div>
      <ShowMore />
    </div>
  );
};

export default Search;
