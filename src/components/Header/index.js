// == Import
import w2rlogo from '../../assets/images/w2rlogo.png';
import profileicon from '../../assets/images/profileicon.png';
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav className="header-nav">
      <div className="header-logo">
        <img alt="placeholder" src={w2rlogo} className="header-logo home" />
        <h1>What2Read</h1>
      </div>
      <div className="header-menus">
        <img alt="profileicon" src={profileicon} className="header-logo profile" />
        <ul className="header-profilemenu">
          <li>Se connecter</li>
          <li>S'inscrire</li>
        </ul>
        <div className="header-burgermenu--icon">
          <div />
          <div />
          <div />
        </div>
        <ul className="header-burgermenu">
          <li>Accueil</li>
          <li>Suggestions</li>
          <li>Recherche</li>
        </ul>
      </div>
    </nav>
  </header>
);

// == Export
export default Header;
