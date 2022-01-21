// == Import
import placeholder from '../../assets/images/placeholder.png';
import profileicon from '../../assets/images/profileicon.png';
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav className="header-nav">
      <div className="header-logo">
        <img alt="placeholder" src={placeholder} className="header-logo book" />
        <h1>What2Read</h1>
      </div>
      <img alt="profileicon" src={profileicon} className="header-logo profile" />
      <ul className="header-profilemenu">
        <li>Mon profil</li>
        <li>Mes favoris</li>
        <li>Mes reviews</li>
        <li>Mes lectures</li>
        <li>Se déconnecter</li>
      </ul>
      <div className="header-burgermenu--icon">
        <span />
        <span />
        <span />
      </div>
      <ul className="header-burgermenu">
        <li>Accueil</li>
        <li>Suggestions</li>
        <li>Recherche</li>
      </ul>
    </nav>
  </header>
);

// == Export
export default Header;
