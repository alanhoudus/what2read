import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const LinkItem = ({ link }) => {
  const itemClass = link.key === 'contact' ? 'header-menu--list-contact' : 'header-menu--list';
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
    nav: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
