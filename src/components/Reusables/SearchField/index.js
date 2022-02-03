// Prop-types
import PropTypes from 'prop-types';
// import icon
import { Search as SearchIcon } from 'react-feather';
// == Import : local
import Field from '../Field';
import './searchField.scss';

// == Composant
const SearchField = ({
  id,
  placeholder,
  className,
  type,
  value,
  name,
  onChange,
}) => (
  <div className="search">
    <Field
      id={id}
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
    />
    <div className="search-button">
      <button type="submit" className="search--submit">
        <SearchIcon color="white" size="20" />
      </button>
    </div>
  </div>
);

SearchField.defaultProps = {
  id: '',
  onChange: null,
  value: '',
  placeholder: '',
};

SearchField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

// == Export
export default SearchField;
