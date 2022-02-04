import PropTypes from 'prop-types';
import './reviews.scss';
import profileicon from '../../../assets/images/profileicon.png';

const Review = ({ book }) => (
  <div className="book-reviews singlereview">
    <h3>{book.title}</h3>
    <p>{book.description}</p>
    <div className="book-reviews author">
      <img src={profileicon} alt="Avatar de l'auteur" className="book-reviews author--avatar" />
      <p className="book-reviews author--name">nom de l'auteur</p>
    </div>
  </div>
);

Review.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
