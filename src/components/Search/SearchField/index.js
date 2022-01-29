// import icon
import { Search as SearchIcon } from 'react-feather';
// == Import : local
import Field from '../../Field';
import './searchField.scss';

// == Composant
const SearchField = () => (
  <div className="search">
    <Field
      type="text"
      className="search--field"
      placeholder="Tolkien"
      id="search"
      name="search"
    />
    <div className="search-button">
      <button type="submit" className="search--submit">
        <SearchIcon color="white" size="20" />
      </button>
    </div>
  </div>
);

// == Export
export default SearchField;
