import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './reviews.scss';

const UserReview = ({
  book,
  content,
  title,
  avatar,
  username,
}) => (
  <div className="book-reviews singlereview">
    <Link
      to={`/livre/${book.isbn}`}
      key={book.isbn}
    >
      <div className="book-reviews book">
        <img className="book-reviews book-cover" src={book.cover} alt="Couverture du livre" />
      </div>
    </Link>
    <div className="book-reviews review">
      <h2>{book.title}</h2>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="book-reviews author">
        <img src={avatar} alt="Avatar de l'auteur" className="book-reviews author--avatar" />
        <p className="book-reviews author--name">{username}</p>
      </div>
    </div>
  </div>
);

UserReview.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default UserReview;
