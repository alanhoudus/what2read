// == Import : local
// hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';
// react-router-dom
import { Navigate } from 'react-router-dom';
// mock data
import { MY_REVIEWS_PRESENTATION } from '../../data/myreviews';
// components
import MyReviewsList from './MyReviewsList';

import './myreviews.scss';

// == Composant
const Reviews = () => {
  // eslint-disable-next-line no-unused-vars
  // const [myReviewsList, setMyReviewsList] = useState(MY_REVIEWS_LIST);
  // eslint-disable-next-line no-unused-vars
  const [myReviewsPresentation, setMyReviewsPresentation] = useState(MY_REVIEWS_PRESENTATION);
  const myReviewList = useSelector((state) => state.userProfile.reviews);
  const isLogged = useSelector((state) => state.userLogin.logged);

  // If user isn't logged in, redirect to the login
  if (!isLogged) {
    return <Navigate to="/connection" />;
  }
  return (
    <div className="reviews">
      <h2>{myReviewsPresentation.title}</h2>
      <div className="reviews-wrapper">
        <MyReviewsList myReviewsList={myReviewList} />
      </div>
    </div>

  );
};

// == Export
export default Reviews;
