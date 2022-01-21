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
      <div className="header-menus">
        <img alt="profileicon" src={profileicon} className="header-logo profile" />
        <ul className="header-profilemenu" />
        <div className="header-burgermenu--icon">
          <div />
          <div />
          <div />
        </div>
        <ul className="header-burgermenu" />
      </div>
    </nav>
  </header>
);

// == Export
export default Header;
