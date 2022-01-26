import PropTypes from 'prop-types';
import MyReview from './MyReview';

const MyReviewsList = ({ myReviewsList }) => (
  myReviewsList.map((myReview) => (
    <MyReview key={myReview.title} myReview={myReview} />
  ))
);

MyReviewsList.propTypes = {
  myReviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MyReviewsList;
