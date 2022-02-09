import PropTypes from 'prop-types';
import UserReview from './UserReview';

const ReviewsList = ({ reviewsList, avatar, username }) => (
  // For each review in the list, create an item
  reviewsList.map((review) => (
    // eslint-disable-next-line max-len
    <UserReview key={review.id} book={review.book} content={review.content} title={review.title} avatar={avatar} username={username} />
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
