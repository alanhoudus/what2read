// == Import : local
// hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// react-router-dom
import { Navigate } from 'react-router-dom';
// mock data
import { MY_REVIEWS_PRESENTATION } from '../../data/myreviews';
// components
import MyReviewsList from './MyReviewsList';
import Loader from '../App/Loader';
// actions
import { getUserReviewsData } from '../../actions/user';
// scss
import './myreviews.scss';

// == Composant
const Reviews = () => {
  // eslint-disable-next-line no-unused-vars
  const [myReviewsPresentation, setMyReviewsPresentation] = useState(MY_REVIEWS_PRESENTATION);
  const myReviewList = useSelector((state) => state.userProfile.reviews);
  const reviewsLoading = useSelector((state) => state.userProfile.reviewsLoading);
  const isLogged = useSelector((state) => state.userProfile.logged);
  const token = useSelector((state) => state.userProfile.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserReviewsData());
    }
  }, [token]);

  // If user isn't logged in, redirect to the login
  if (!isLogged) {
    return <Navigate to="/connexion" />;
  }
  if (reviewsLoading) {
    return <Loader />;
  }
  return (
    <div className="reviews">
      <h2>{myReviewsPresentation.title}</h2>
      <div className="reviews-wrapper">
        {myReviewList.length === 0
          ? <p>Vous n'avez pas encore écrit de review</p>
          : <MyReviewsList myReviewsList={myReviewList} />}
      </div>
    </div>
  );
};

// == Export
export default Reviews;
