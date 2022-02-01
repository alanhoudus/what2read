// import
// scss
import { useSelector } from 'react-redux';
import './connectionprofile.scss';

const ConnectionProfile = () => {
  const username = useSelector((state) => state.userProfile.username);

  return (
    <div className="connectionprofile">
      Bienvenue {username}
    </div>
  );
};

export default ConnectionProfile;
