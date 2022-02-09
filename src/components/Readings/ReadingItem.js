// hooks
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// react-router-dom
import { Link } from 'react-router-dom';
// react-feather
import { Trash } from 'react-feather';
// prop-types
import PropTypes from 'prop-types';
// actions
import { removeBookFromReadings } from '../../actions/user';

const ReadingItem = ({ book, id }) => {
  const [isDiplayed, setIsDisplayed] = useState(true);
  const dispatch = useDispatch();
  if (isDiplayed === false) {
    return <div />;
  }
  return (
    <div className="readings-book">
      <div className="readings-book--cover">
        <Link
          to={`/livre/${book.isbn}`}
          key={book.isbn}
        >
          <img className="readings-book--cover" src={book.cover} alt="title" />
        </Link>
        <Trash
          className="readings review-done"
          color="gray"
          onClick={() => {
            dispatch(removeBookFromReadings(id));
            setIsDisplayed(false);
          }}
        />
      </div>
      <h3 className="readings-book--title">{book.title}</h3>
      <h4 className="readings-book--subtitle">{book.subtitle}</h4>

    </div>
  );
};

ReadingItem.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    cover: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default ReadingItem;
