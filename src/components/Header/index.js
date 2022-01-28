// == Import
// routes
import { NavLink } from 'react-router-dom';
// hooks
import { useState, useEffect, useRef } from 'react';
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
  // boolean state made to handle the mobile nav on toggle
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  // we use "useRef" to handle the click outside the header, if we click
  // outside the header the nav menu will close
  const burgerMenu = useRef();
  const profileMenu = useRef();
  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleProfileMenuClick = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  // if isBurgerMenuOpen or isProfileMenuOpen changed
  // we listen to every click on document,
  // -> at document.click -> we remove our "clic" listener (-> checkIfClickedOutside)
  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      // -> if it's not a click on our "burger button"
      // we close the burger menu
      if (isBurgerMenuOpen && burgerMenu.current && !burgerMenu.current.contains(event.target)) {
        setIsBurgerMenuOpen(false);
      }

      // -> if it's not a click on our "profile button"
      // we close the profile menu
      if (isProfileMenuOpen && profileMenu.current && !profileMenu.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };

    // -> we attached a click listener to the document
    // https://www.codingdeft.com/posts/react-on-click-outside/
    document.addEventListener('click', checkIfClickedOutside);

    // -> we remove our click listener after the update of our component
    // -> our component re update if isBurgerMenuOpen / isProfileMenuOpen changed
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isBurgerMenuOpen, isProfileMenuOpen]);

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
          <img
            alt="profileicon"
            src={profileicon}
            className={`header-logo profile ${isProfileMenuOpen ? 'active' : ''}`}
            onClick={handleProfileMenuClick}
            ref={profileMenu}
          />
          <ul className={`header-profilemenu ${isProfileMenuOpen ? 'active' : ''}`}>
            {!isLogged && (
              <LinkLists list={loggedOutNav} />
            )}
            { isLogged && (
            <LinkLists list={loggedInNav} />
            )}
          </ul>
          <div
            onClick={handleBurgerMenuClick}
            className={`header-burgermenu--icon ${isBurgerMenuOpen ? 'active' : ''}`}
            ref={burgerMenu}
          >
            <div />
            <div />
            <div />
          </div>
          <ul className={`header-burgermenu ${isBurgerMenuOpen ? 'active' : ''}`}>
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
