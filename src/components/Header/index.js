// == Import
// routes
import { NavLink } from 'react-router-dom';

// components
import Field from '../Field';

// assets
import w2rlogo from '../../assets/images/w2rlogo.png';
import profileicon from '../../assets/images/profileicon.png';
// scss
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav className="header-nav">
      <div className="header-logo">
        <NavLink
          to="/"
          key="home"
        >
          <img alt="placeholder" src={w2rlogo} className="header-logo home" />
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
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/book"
            key="book"
          >
            <li>Livre</li>
          </NavLink>
          <li>Suggestions</li>
          <li>Recherche</li>
          <li><Field className="header-bugermenu--quicksearch" placeholder="Recherche rapide" /></li>
          <NavLink
            to="/contact"
            key="contact"
          >
            <li>Nous contacter</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  </header>
);

// == Export
export default Header;
