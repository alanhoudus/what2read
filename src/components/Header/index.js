// == Import
// routes
import { NavLink } from 'react-router-dom';
// hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';

// components
import Field from '../Field';
import LinkLists from './LinkLists';

// assets
import w2rlogo from '../../assets/images/w2rlogo.png';
import w2rlogoDesktop from '../../assets/images/w2rlogodesktop.png';
import profileicon from '../../assets/images/profileicon.png';
// scss
import './header.scss';
import { LOGGED_OUT_USER_NAV, LOGGED_IN_USER_PROFILE_NAV, REGULAR_NAV } from '../../data/nav';

// == Composant
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedInNav, setloggedInNav] = useState(LOGGED_IN_USER_PROFILE_NAV);
  // eslint-disable-next-line no-unused-vars
  const [loggedOutNav, setLoggedOutNav] = useState(LOGGED_OUT_USER_NAV);
  // eslint-disable-next-line no-unused-vars
  const [regularNavLinks, setRegularNavLinks] = useState(REGULAR_NAV);
  const isLogged = useSelector((state) => state.userLogin.logged);

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">
          <NavLink
            to="/"
            key="home"
          >
            <img alt="placeholder" src={w2rlogo} className="header-logo home homeMobile" />
            <img alt="placeholder" src={w2rlogoDesktop} className="header-logo home homeDesktop" />
          </NavLink>
          <h1>What2Read</h1>
        </div>
        <div className="header-menus">
          <img alt="profileicon" src={profileicon} className="header-logo profile" />
          <ul className="header-profilemenu">
            { !isLogged && (
              <LinkLists list={loggedOutNav} />
            )}
            { isLogged && (
            <LinkLists list={loggedInNav} />
            )}
          </ul>
          <div className="header-burgermenu--icon">
            <div />
            <div />
            <div />
          </div>
          <ul className="header-burgermenu">
            <LinkLists list={regularNavLinks} />
            <li>
              <Field
                type="text"
                className="header-burgermenu--quicksearch"
                placeholder="Recherche rapide"
                name="quicksearch"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

// == Export
export default Header;
