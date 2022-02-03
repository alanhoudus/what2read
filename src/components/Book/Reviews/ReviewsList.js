import PropTypes from 'prop-types';
import Review from './Review';

const ReviewsList = ({ reviewsList }) => (
  // For each review in the list, create an item
  reviewsList.map((book) => (
    <Review key={book.cover} book={book} />
  ))
);

ReviewsList.propTypes = {
  myReviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewsList;
