import './profile.scss';
import profileicon from '../../assets/images/profileicon.png';

const Profile = () => (
  <div>
    <div className="profile">
      <h2 className="profile-title">Mon profil</h2>
      <div className="profile-contentGroup">
        <h3 className="profile-content name">Pseudo
        </h3>
        <img alt="profileicon" src={profileicon} className="header-logo profile" />
        <img alt="profileicon" src={profileicon} className="profile-content avatar" />
        <div className="profile-content">
          <h3>Présentation</h3>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
          dolor blanditiis officia. Fuga, porro odit expedita
        </div>
        <p className="profile-info">what2read@gmail.com</p>
        <button className="button-edit">Modifier</button>
        <button className="button-delete">Supprimer le compte</button>
      </div>
    </div>
  </div>
);

export default Profile;
