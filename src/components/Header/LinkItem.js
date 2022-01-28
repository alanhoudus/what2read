// import
// hooks
import { useDispatch } from 'react-redux';
// react-router-dom
import { NavLink } from 'react-router-dom';
// prop-types
import PropTypes from 'prop-types';
// actions
import { logOut } from '../../actions/user';

const LinkItem = ({ link }) => {
  const itemClass = link.key === 'contact' ? 'header-menu--list-contact' : 'header-menu--list';
  const action = link.key === 'deconnexion' ? logOut() : false;
  const dispatch = useDispatch();
  if (action) {
    return (
      <NavLink
        to={link.to}
        key={link.key}
        onClick={() => {
          dispatch(action);
        }}
      >
        <li
          className={itemClass}
        >
          {link.name}
        </li>
      </NavLink>
    );
  }

  return (
    <NavLink
      to={link.to}
      key={link.key}
    >
      <li
        className={itemClass}
      >
        {link.name}
      </li>
    </NavLink>
  );
};

LinkItem.propTypes = {
  link: PropTypes.shape({
    key: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
