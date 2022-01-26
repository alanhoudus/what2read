// hooks
import { useState } from 'react';
// import icon
import { Search as SearchIcon } from 'react-feather';
// import components
import Field from '../Field';
import SearchList from './SearchList';
// import scss
import './search.scss';
// mock data
import SEARCHED_BOOKS_LIST from '../../data/search';

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchedBooksList, setSearchedBooksList] = useState(SEARCHED_BOOKS_LIST);

  return (
    <div className="search">
      <div className="search-input">
        <Field type="text" className="search-input--field" placeholder="Tolkien" />
        <button type="submit" className="search-input--submit">
          <SearchIcon color="white" size="20" />
        </button>
      </div>
      <div className="search-books">
        <SearchList searchedBooksList={searchedBooksList} />
      </div>
      <button type="button" className="search-showMore">Voir plus</button>
    </div>
  );
};

export default Search;
