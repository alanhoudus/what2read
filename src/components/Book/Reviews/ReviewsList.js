import PropTypes from 'prop-types';
import Review from './Review';

const ReviewsList = ({ reviewsList }) => (
  // For each review in the list, create an item
  reviewsList.map((book) => (
    <Review key={book.isbn} book={book} />
  ))
);

ReviewsList.propTypes = {
  myReviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      ibsn: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewsList;
