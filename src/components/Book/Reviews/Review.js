import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './reviews.scss';

const Review = ({ book }) => (
  <div className="book-reviews singlereview">
    <h3>{book.title}</h3>
    <p>{book.content}</p>
    <div className="book-reviews author">
      <Link
        to={`/profil/${book.user.id}`}
        key={book.user.id}
      >
        <img src={book.user.picture} alt="Avatar de l'auteur" className="book-reviews author--avatar" />
        <p className="book-reviews author--name">{book.user.username}</p>
      </Link>
    </div>

  </div>
);

Review.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Review;
