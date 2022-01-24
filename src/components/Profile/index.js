import './profile.scss';
import profileicon from '../../assets/images/profileicon.png';

const Profile = () => (
  <div>
    <div className="profile">
      <img alt="profileicon" src={profileicon} className="profile-logo" />
      <div className="profile-contentGroup">
        <h2 className="profile-content title">Mon profil</h2>
        <h3 className="profile-content subtitle">Pseudo
        </h3>

        <img alt="profileicon" src={profileicon} className="profile-content avatar" />
        <div className="profile-content box">
          <div className="profile-content subtitle">Présentation
          </div>
          <p className="profile-content description">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
            dolor blanditiis officia. Fuga, porro odit expedita
          </p>
        </div>
        <p className="profile-content mail">mon.mail@gmail.com</p>
        <button className="profile-content button-edit">Modifier</button>
        <button className="profile-content button-delete">Supprimer le compte</button>
      </div>
    </div>
  </div>
);

export default Profile;
