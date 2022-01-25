// == Import
// routes
import { NavLink } from 'react-router-dom';

// selectors
import { mapProfileNav, mapRegularNav } from '../../selectors/navigation';

// components
import Field from '../Field';

// assets
import w2rlogo from '../../assets/images/w2rlogo.png';
import w2rlogoDesktop from '../../assets/images/w2rlogodesktop.png';
import profileicon from '../../assets/images/profileicon.png';
// scss
import './header.scss';

// == Composant
const Header = () => {
  console.log('');
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">
const Header = () => (
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
          <li>Se connecter</li>
          <li>S'inscrire</li>
          <NavLink
            to="/profile"
            key="profile"
          >
            <li>Profil</li>
          </NavLink>
          <NavLink
            to="/inscription"
            key="home"
          >
            <li>S'inscrire</li>
          </NavLink>
        </ul>
        <div className="header-burgermenu--icon">
          <div />
          <div />
          <div />
        </div>
        <ul className="header-burgermenu">
          <NavLink
            to="/"
            key="home"
          >
            <img alt="placeholder" src={w2rlogo} className="header-logo home homeMobile" />
            <img alt="placeholder" src={w2rlogoDesktop} className="header-logo home homeDesktop" />
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/book"
            key="book"
          >
            <li>Livre</li>
          </NavLink>
          <li>Suggestions</li>
          <NavLink
            to="/recherche"
            key="recherche"
          >
            <li>Recherche</li>
          </NavLink>
          <h1>What2Read</h1>
        </div>
        <div className="header-menus">
          <img alt="profileicon" src={profileicon} className="header-logo profile" />
          <ul className="header-profilemenu">
            {mapProfileNav()}
          </ul>
          <div className="header-burgermenu--icon">
            <div />
            <div />
            <div />
          </div>
          <ul className="header-burgermenu">
            {mapRegularNav()}
            <li><Field type="text" className="header-bugermenu--quicksearch" placeholder="Recherche rapide" /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

// == Export
export default Header;
