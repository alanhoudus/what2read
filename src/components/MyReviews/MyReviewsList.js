import PropTypes from 'prop-types';
import MyReview from './MyReview';

const MyReviewsList = ({ myReviewsList }) => (
  // For each review in the list, create an item
  myReviewsList.map((review) => (
    <MyReview
      key={review.book.isbn}
      book={review.book}
      content={review.content}
      title={review.title}
      id={review.id}
    />
  ))
);

MyReviewsList.propTypes = {
  myReviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      book: PropTypes.shape({
        isbn: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default MyReviewsList;
