// import scss
import './logoProfil.scss';
// import asset
import profilLogo from '../../assets/images/profileicon.png';

const LogoProfil = () => (
  <div className="logoProfil">
    <img src={profilLogo} alt="profile" className="logoProfil-img" />
  </div>
);

export default LogoProfil;
