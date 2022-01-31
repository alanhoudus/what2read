// hooks
import { useSelector } from 'react-redux';
// import components
import ShowMore from '../Reusables/ShowMore';
import Loader from '../App/Loader';
import SearchList from './SearchList';
import SearchField from '../Reusables/SearchField';

// import scss
import './search.scss';

const Search = () => {
  const searchedBooks = useSelector((state) => state.books.booksList);
  const isLoading = useSelector((state) => state.books.booksListDataLoading);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="search">
      <div className="search-input">
        <SearchField />
      </div>
      <div className="search-books">
        <SearchList searchedBooksList={searchedBooks} />
      </div>
      <ShowMore />
    </div>
  );
};

export default Search;
