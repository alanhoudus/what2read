// hooks
import { useState } from 'react';
// import icon
import { Search as SearchIcon } from 'react-feather';
// hooks
import { useSelector, useDispatch } from 'react-redux';
// import components
import Field from '../Field';
import ShowMore from '../ShowMore';
import SearchList from './SearchList';

// actions
import { updateSearchBookValue } from '../../actions/search';
// import scss
import './search.scss';
// mock data
import SEARCHED_BOOKS_LIST from '../../data/search';

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchedBooksList, setSearchedBooksList] = useState(SEARCHED_BOOKS_LIST);
  // controlled input search
  const inputSearch = useSelector((state) => state.bookSearch.inputSearch);
  const dispatch = useDispatch();

  return (
    <div className="search">
      <div className="search-input">
        <Field
          type="text"
          className="search-input--field"
          placeholder="Tolkien"
          id="search"
          name="search"
          value={inputSearch}
          onChange={(newValue) => {
            const actionUpdate = updateSearchBookValue(newValue);
            dispatch(actionUpdate);
          }}
        />
        <button type="submit" className="search-input--submit">
          <SearchIcon color="white" size="20" />
        </button>
      </div>
      <div className="search-books">
        <SearchList searchedBooksList={searchedBooksList} />
      </div>
      <ShowMore />
    </div>
  );
};

export default Search;
