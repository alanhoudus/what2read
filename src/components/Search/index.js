// hooks
import { useState } from 'react';
// import components
import ShowMore from '../ShowMore';
import SearchList from './SearchList';
// import scss
import './search.scss';
// mock data
import SEARCHED_BOOKS_LIST from '../../data/search';
import SearchField from './SearchField';

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchedBooksList, setSearchedBooksList] = useState(SEARCHED_BOOKS_LIST);

  return (
    <div className="search">
      <div className="search-input">
        <SearchField />
      </div>
      <div className="search-books">
        <SearchList searchedBooksList={searchedBooksList} />
      </div>
      <ShowMore />
    </div>
  );
};

export default Search;
