// react-router-dom
import { Link, Navigate } from 'react-router-dom';
// hooks
import { useSelector } from 'react-redux';
import { useState } from 'react';
// components
import Loader from '../App/Loader';
import ModaleDeleteAccount from './modalDeleteAccount';

// scss
import './profile.scss';

const Profile = () => {
  const username = useSelector((state) => state.userProfile.username);
  const description = useSelector((state) => state.userProfile.description);
  const email = useSelector((state) => state.userProfile.email);
  const avatar = useSelector((state) => state.userProfile.picture);
  const isLogged = useSelector((state) => state.userProfile.logged);
  const profileIsLoading = useSelector((state) => state.userProfile.profileIsLoading);
  const [isModal, setIsModal] = useState(false);

  // If user isn't logged in, redirect to the login
  if (!isLogged) {
    return <Navigate to="/connection" />;
  }
  if (profileIsLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="profile">
        <h2 className="profile title">Mon profil</h2>
        <div className="profile-contentGroup">
          <h3 className="profile-content title">{username}
          </h3>

          <img alt="profileicon" src={avatar} className="profile-content avatar" />
          <h3 className="profile-content  title">Présentation
          </h3>
          <p className="profile-content description text">
            {description}
          </p>
          <h3 className="profile-content title">Mon Mail
          </h3>
          <p className="profile-content mail">{email}</p>
          <div className="profile-content button">
            <Link
              to="/profil/edition"
              key="1"
            >
              <button className="profile-content button edit" type="button">Modifier</button>
            </Link>
            <button
              className="profile-content button delete"
              type="button"
              onClick={() => {
                setIsModal(true);
              }}
            >Supprimer le compte
            </button>
          </div>
        </div>
        <div>
          {isModal && (<ModaleDeleteAccount setIsModal={setIsModal} />)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
