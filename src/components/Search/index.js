// hooks
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import components
import ShowMore from '../Reusables/ShowMore';
import SearchList from './SearchList';
import SearchField from '../Reusables/SearchField';

// import scss
import './search.scss';

const Search = () => {
  const searchedBooks = useSelector((state) => state.books.booksList);

  useEffect(() => {
    console.log(searchedBooks);
  }, [searchedBooks]);
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
