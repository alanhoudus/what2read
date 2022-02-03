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
  // If the key of the item is contact, give a special className
  // to put contact at the end of the header
  // const itemClass = link.key === 'contact' ? 'header-menu--list-contact' : 'header-menu--list';
  // If the key is deconnexion, add an action onClick
  const action = link.key === 'deconnexion' ? logOut() : false;
  const dispatch = useDispatch();
  if (action) {
    return (
      <li className="header-menu--list">
        <NavLink
          to={link.to}
          key={link.key}
          onClick={() => {
            dispatch(action);
          }}
        >
          {link.name}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="header-menu--list">
      <NavLink to={link.to} key={link.key}>
        {link.name}
      </NavLink>
    </li>
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
