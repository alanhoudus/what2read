// == Import : local
import PropTypes from 'prop-types';
import './textArea.scss';

const TextArea = ({
  placeholder,
  className,
  onChange,
  value,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };
  return (
    <textarea
      cols="30"
      rows="10"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={handleChange}
    />
  );
};

TextArea.defaultProps = {
  onChange: null,
  value: '',
  placeholder: '',
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,

};
export default TextArea;
