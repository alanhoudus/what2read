// == Import : local
import PropTypes from 'prop-types';

import './field.scss';

// == Composant
const Field = ({ placeholder, className, type }) => (
  <input className={className} placeholder={placeholder} type={type} />
);

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// == Export
export default Field;
