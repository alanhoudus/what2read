import './editprofile.scss';
import { Upload as Upload } from 'react-feather';
import { Edit2 as Edit } from 'react-feather';
import profileicon from '../../../assets/images/profileicon.png';

const EditProfile = () => (
  <div>
    <div className="profile">
      <img alt="profileicon" src={profileicon} className="profile-logo" />
      <div className="profile-contentGroup">
        <h2 className="profile-content title">Mon profil</h2>
        <h3 className="profile-content subtitle">Pseudo<button type="button" className="profile-content-button edit-name"><Edit /></button></h3>

        <img alt="profileicon" src={profileicon} className="profile-content avatar" /><button type="button" className="profile-content-button edit-avatar"><Upload /></button>
        <div className="profile-content subtitle">Présentation<button type="button" className="profile-content-button edit-description"><Edit /></button>
        </div>
        <p className="profile-content description">
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
          dolor blanditiis officia. Fuga, porro odit expedita
        </p>
        <p className="profile-content mail">mon.mail@gmail.com<button type="button" className="profile-content-button edit-mail"><Edit /></button></p>
      </div>
    </div>
  </div>
);

export default EditProfile;
