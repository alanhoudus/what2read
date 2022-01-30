// import
// react-router-dom
import { Link } from 'react-router-dom';
// hooks
import { useDispatch, useSelector } from 'react-redux';
// assets
import { Upload, Edit2 } from 'react-feather';
// components
import Field from '../../Field';
import TextArea from '../../TextArea';

import profileicon from '../../../assets/images/profileicon.png';
// actions
import { updateProfileValue } from '../../../actions/user';
// scss
import './editprofile.scss';

const EditProfile = () => {
  const userNickame = useSelector((state) => state.userProfile.nickname);
  const userDescription = useSelector((state) => state.userProfile.description);
  const userEmail = useSelector((state) => state.userProfile.email);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="editprofile">
        <h2 className="editprofile title">Mon profil</h2>
        <div className="editprofile-contentGroup">
          <form>
            <Field
              className="editprofile-content input nickname"
              value={userNickame}
              id="nickname"
              name="nickname"
              type="text"
              onChange={(newValue, identifier) => {
                const action = updateProfileValue(identifier, newValue);
                dispatch(action);
              }}
            />
            <Edit2 />
            {/* <div className="editprofile-content avatar"> */}
              <img alt="editprofileicon" src={profileicon} className="editprofile-content avatar" />
              <Upload />
            {/* </div> */}
            <h3 className="editprofile-content title-description">Présentation
              <Edit2
                className="editprofile-content edit-presentation"
              />
            </h3>
            <TextArea
              className="editprofile-content input description"
              value={userDescription}
              onChange={(evt) => {
                const newValue = evt.target.value;
                const action = updateProfileValue('description', newValue);
                dispatch(action);
              }}
            />
            <div className="editprofile-content mail">
              <Field
                className="editprofile-content input mail"
                value={userEmail}
                type="mail"
                id="mail"
                name="mail"
                onChange={(newValue, identifier) => {
                  const action = updateProfileValue(identifier, newValue);
                  dispatch(action);
                }}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
