// import
// react-router-dom
import { Navigate, useNavigate } from 'react-router-dom';
// hooks
import { useDispatch, useSelector } from 'react-redux';
// assets
import { Edit2 } from 'react-feather';
// components
import Field from '../../Reusables/Field';
import TextArea from '../../Reusables/TextArea';
import UploadAvatar from '../UploadAvatar';

// actions
import { editUserProfile, updateProfileValue } from '../../../actions/user';
// scss
import './editprofile.scss';

const EditProfile = () => {
  const userUsername = useSelector((state) => state.userProfile.username);
  const userDescription = useSelector((state) => state.userProfile.description);
  const userEmail = useSelector((state) => state.userProfile.email);
  const userPicture = useSelector((state) => state.userProfile.picture);
  const isLogged = useSelector((state) => state.userProfile.logged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If user isn't logged in, redirect to the login
  if (!isLogged) {
    return <Navigate to="/connexion" />;
  }
  return (
    <div>
      <div className="editprofile">
        <h2 className="editprofile title">Mon profil</h2>
        <div className="editprofile-contentGroup">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(editUserProfile());
              navigate('/profil');
            }}
          >
            <Field
              className="editprofile-content input username"
              value={userUsername}
              id="username"
              name="username"
              type="text"
              onChange={(newValue, identifier) => {
                const action = updateProfileValue(identifier, newValue);
                dispatch(action);
              }}
            />
            <Edit2 />
            <img alt="editprofileicon" src={userPicture} className="editprofile-content avatar" />
            {/* <UploadAvatar /> */}
            <h3 className="editprofile-content title-description">Présentation
              <Edit2
                className="editprofile-content edit-presentation"
              />
            </h3>
            <TextArea
              className="editprofile-content input description"
              value={userDescription}
              name="description"
              onChange={(newValue) => {
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
            {/* <Link
              to="/profil"
              key="1"
            > */}
            <button
              className="editprofile-content button"
              type="submit"
            >
              Valider les modifications
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
