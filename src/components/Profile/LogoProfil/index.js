// react-router-dom
import { Link } from 'react-router-dom';
// import asset
import profilLogo from '../../../assets/images/profileicon.png';
// import scss
import './logoProfil.scss';

const LogoProfil = () => (
  <Link
    to="/profil"
  >
    <div
      className="logoProfil"
    >
      <img src={profilLogo} alt="profile" className="logoProfil-img" />
    </div>
  </Link>
);

export default LogoProfil;
