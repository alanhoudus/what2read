import { Trash, Edit } from 'react-feather';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkItem = ({ book }) => (
  <div className="reviews-wrapper--singlereview">
    <Link
      to={`/livre/${book.isbn}`}
      key={book.isbn}
    >
      <img src={book.cover} alt="Couverture du livre" />
    </Link>
    <div className="reviews-wrapper--singlereview-infos">
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <div className="reviews-wrapper--singlereview-infos--buttons">
        <Edit color="white" />
        <Trash color="red" />
      </div>
    </div>
  </div>
);

LinkItem.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
