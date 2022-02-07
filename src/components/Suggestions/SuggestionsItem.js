import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SuggestionsItem = ({ book }) => (
  <div className="suggestions-history book">
    <Link
      to={`/livre/${book.isbn}`}
      key={book.isbn}
    >
      <img className="suggestions-history book-cover" src={book.cover} alt="couverture du livre" />
      <h3 className="suggestions-history book-title">{book.title}</h3>
      <h4 className="suggestions-history book-date">{book.createdAt}</h4>
    </Link>
  </div>
);

SuggestionsItem.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default SuggestionsItem;
