// == Import : local
// hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';
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
