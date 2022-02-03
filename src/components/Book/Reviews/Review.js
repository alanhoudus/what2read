import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Review = ({ book }) => (
  <div className="reviews-wrapper--singlereview">
    <Link
      to={`/livre/${book.isbn}`}
      key={book.isbn}
    >
      <img src={book.cover} className="reviews-wrapper--singlereview-img" alt="Couverture du livre" />
    </Link>
    <div className="reviews-wrapper--singlereview-infos">
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      {/* <div className="review-author">
        <img src={profileicon} alt="Avatar de l'auteur" className="review-author--avatar" />
        <p className="review-author--name">{user.auhorName}</p>
      </div> */}
    </div>
  </div>
);

Review.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
