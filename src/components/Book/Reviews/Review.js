import PropTypes from 'prop-types';
import './reviews.scss';
import profileicon from '../../../assets/images/profileicon.png';

const Review = ({ book }) => (
  <div className="book-reviews singlereview">
    <h3>{book.title}</h3>
    <p>{book.content}</p>
    <div className="book-reviews author">
      <img src={profileicon} alt="Avatar de l'auteur" className="book-reviews author--avatar" />
      <p className="book-reviews author--name">{book.user.username}</p>
    </div>
  </div>
);

Review.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Review;
