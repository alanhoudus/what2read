// == Import
// routes
import { NavLink } from 'react-router-dom';

// components
import Field from '../Field';

// assets
import w2rlogo from '../../assets/images/w2rlogo.png';
import w2rlogoDesktop from '../../assets/images/w2rlogodesktop.png';
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
          <img alt="placeholder" src={w2rlogo} className="header-logo home homeMobile" />
          <img alt="placeholder" src={w2rlogoDesktop} className="header-logo home homeDesktop" />
        </NavLink>
        <h1>What2Read</h1>
      </div>
      <div className="header-menus">
        <img alt="profileicon" src={profileicon} className="header-logo profile" />
        <ul className="header-profilemenu">
          <li className="header-profilemenu link">Se connecter</li>
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
            <li>Accueil</li>
          </NavLink>
          <li>Suggestions</li>
          <NavLink
            to="/recherche"
            key="recherche"
          >
            <li>Recherche</li>
          </NavLink>
          <li><Field type="text" className="header-bugermenu--quicksearch" placeholder="Recherche rapide" /></li>
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
