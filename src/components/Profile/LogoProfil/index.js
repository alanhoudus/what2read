// react-router-dom
import { Link } from 'react-router-dom';
// hooks
import { useSelector } from 'react-redux';
// import scss
import './logoProfil.scss';

const LogoProfil = () => {
  const avatar = useSelector((state) => state.userRegistration.picture);
  return (
    <Link
      to="/profil"
    >
      <div
        className="logoProfil"
      >
        <img src={avatar} alt="profile" className="logoProfil-img" />
      </div>
    </Link>
  );
};

export default LogoProfil;
