import { Star, FileText } from 'react-feather';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReadingItem = ({ book }) => (
  <div className="readings-book">
    <Link
      to="/livre"
      key={book.isbn}
    >
      <div className="readings-book--cover">
        <img className="readings-book--cover-img" src={book.cover} alt="title" />
        <Star className="readings favorited true" color="gold" />
        <FileText className="readings review-done" color="green" />
      </div>
      <h3 className="readings-book--title">{book.title}</h3>
      <h4 className="readings-book--subtitle">{book.subtitle}</h4>
    </Link>
  </div>
);

ReadingItem.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReadingItem;
