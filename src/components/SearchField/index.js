// hooks
import { useDispatch, useSelector } from 'react-redux';
// import icon
import { Search as SearchIcon } from 'react-feather';
// == Import : local
import Field from '../Field';
import './searchField.scss';
// actions
import { updateSearchBookValue } from '../../actions/search';

// == Composant
const SearchField = () => {
  // controlled input search
  const inputSearch = useSelector((state) => state.bookSearch.inputSearch);
  const dispatch = useDispatch();

  return (
    <div className="search">
      <Field
        type="text"
        className="search--field"
        placeholder="Tolkien"
        id="search"
        name="search"
        value={inputSearch}
        onChange={(newValue) => {
          const actionUpdate = updateSearchBookValue(newValue);
          dispatch(actionUpdate);
        }}
      />
      <div className="search-button">
        <button type="submit" className="search--submit">
          <SearchIcon color="white" size="20" />
        </button>
      </div>
    </div>
  );
};

// == Export
export default SearchField;
