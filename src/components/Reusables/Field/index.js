// == Import : local
import PropTypes from 'prop-types';

import './field.scss';

/**
 * TODO la props id n'est pas required pour l'instant,
 * j'ai dû mettre un id pour régler l'erreur avec esLint
 * "un label doit être associé à un input" -> htmlFor + id
 */

// == Composant
const Field = ({
  id,
  label,
  placeholder,
  className,
  type,
  value,
  name,
  onChange,
  minLength,
  required,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  return (
    <>
      {/* Si on ne renseigne pas de label, alors il ne s'affiche pas dans le DOM */}
      {label && (<label htmlFor={id}>{label}</label>)}
      <input
        id={id}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        minLength={minLength}
        onChange={handleChange}
        required={required}
      />
    </>
  );
};

Field.defaultProps = {
  id: '',
  label: '',
  onChange: null,
  value: '',
  placeholder: '',
  minLength: '0',
  required: '',
};

Field.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  minLength: PropTypes.string,
  required: PropTypes.string,
};

// == Export
export default Field;
