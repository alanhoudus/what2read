import { Link } from 'react-router-dom';

import './profile.scss';
import profileicon from '../../assets/images/profileicon.png';

const Profile = () => (
  <div>
    <div className="profile">
      <div className="profile-contentGroup">
        <h2 className="profile-content title">Mon profil</h2>
        <h3 className="profile-content  title-second">Pseudo
        </h3>

        <img alt="profileicon" src={profileicon} className="profile-content avatar" />
        <h3 className="profile-content  title-second">Présentation
        </h3>
        <p className="profile-content description text">
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
          dolor blanditiis officia. Fuga, porro odit expedita
        </p>
        <h3 className="profile-content title-second">Présentation
        </h3>
        <p className="profile-content mail">mon.mail@gmail.com</p>
        <Link
          to="/profil/edition"
          key="1"
        >
          <button className="profile-content button edit" type="button">Modifier</button>
        </Link>
        <button className="profile-content button delete" type="button">Supprimer le compte</button>
      </div>
    </div>
  </div>
);

export default Profile;
