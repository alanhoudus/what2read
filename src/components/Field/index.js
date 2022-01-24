// == Import : local
import PropTypes from 'prop-types';

import './field.scss';

// == Composant
const Field = ({ placeholder, className }) => (
  <input className={className} placeholder={placeholder} />
);

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

// == Export
export default Field;
