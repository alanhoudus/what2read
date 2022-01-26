import PropTypes from 'prop-types';
import MyReview from './MyReview';

const MyReviewsList = ({ myReviewsList }) => (
  myReviewsList.map((myReview) => (
    <MyReview key={myReview.cover} myReview={myReview} />
  ))
);

MyReviewsList.propTypes = {
  myReviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MyReviewsList;
