// import
// Prop-types
import PropTypes from 'prop-types';
// scss
import './popupinfo.scss';

const PopUpInfo = ({
  message,
  username,
}) => (
  <div className="popupinfo">
    {message} {username}
  </div>
);

PopUpInfo.defaultProps = {
  username: '',
};

PopUpInfo.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default PopUpInfo;
