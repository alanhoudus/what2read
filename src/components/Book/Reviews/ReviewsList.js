import PropTypes from 'prop-types';
import Review from './Review';

const ReviewsList = ({ reviewsList }) => (
  // For each review in the list, create an item
  reviewsList.map((review) => (
    <Review key={review.id} book={review} />
  ))
);

ReviewsList.propTypes = {
  reviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewsList;
