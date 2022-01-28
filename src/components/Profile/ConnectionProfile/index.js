// import
// scss
import { useSelector } from 'react-redux';
import './connectionprofile.scss';

const ConnectionProfile = () => {
  const userName = useSelector((state) => state.userProfile.nickname);

  return (
    <div className="connectionprofile">
      Bienvenu.e {userName}
    </div>
  );
};

export default ConnectionProfile;
