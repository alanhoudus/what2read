import './editprofile.scss';
import { Link } from 'react-router-dom';
import Field from 'src/components/Field';
import { Upload, Edit2 } from 'react-feather';
import profileicon from '../../../assets/images/profileicon.png';

const EditProfile = () => (
  <div>
    <div className="editprofile">
      {/* <img alt="editprofileicon" src={profileicon} className="editprofile-logo" /> */}
      <div className="editprofile-contentGroup">
        <h2 className="editprofile-content title">Mon profil</h2>
        <Field
          className="editprofile-content input nickname"
          value="Pseudo"
        />
        <Edit2 />
        <img alt="editprofileicon" src={profileicon} className="editprofile-content avatar" />
        <Upload />

        <div className="editprofile-content title-description">Présentation
          <Edit2
            className="editprofile-content edit-presentation"
          />
        </div>
        <textarea
          className="editprofile-content input description"
          value="Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
          dolor blanditiis officia. Fuga, porro odit expedita"
        />
        <div className="editprofile-content mail">
          <Field
            className="editprofile-content input mail"
            value="mon.mail@gmail.com"
            type="mail"
          />
          <Edit2 />
        </div>
        <Link
          to="/profil"
          key="1"
        >
          <button
            className="editprofile-content button"
            type="button"
          >
            Valider les modifications
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default EditProfile;
