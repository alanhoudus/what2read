// hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../App/Loader';
import Separator from '../Reusables/Separator';
import { getOtherUserData } from '../../actions/user';

// scss
import './otheruserprofile.scss';
import UserReviewsList from './UserReviewsList';

const OtherUserProfile = () => {
  const username = useSelector((state) => state.otherUserProfile.username);
  const description = useSelector((state) => state.otherUserProfile.description);
  const avatar = useSelector((state) => state.otherUserProfile.picture);
  const reviews = useSelector((state) => state.otherUserProfile.reviews);
  const profileIsLoading = useSelector((state) => state.otherUserProfile.otherProfileIsLoading);
  const profileNotFound = useSelector((state) => state.otherUserProfile.profileError);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOtherUserData(userId));
  }, [profileIsLoading]);

  if (profileIsLoading) {
    return <Loader />;
  }
  if (profileNotFound) {
    navigate('/profilenotfound');
  }
  return (
    <div>
      <div className="profile">
        <h2 className="profile title">Profil de {username}</h2>
        <div className="profile-contentGroup">
          <img alt="profileicon" src={avatar} className="profile-content avatar" />
          <h3 className="profile-content  title">Présentation
          </h3>
          <p className="profile-content description text">
            {description}
          </p>
        </div>
      </div>
      <Separator />
      <UserReviewsList reviewsList={reviews} avatar={avatar} username={username} />
    </div>
  );
};

export default OtherUserProfile;
