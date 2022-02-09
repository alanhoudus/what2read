// hooks
import { useDispatch } from 'react-redux';
// prop-types
import PropTypes from 'prop-types';
// actions
import { addBookToReadings } from '../../../actions/user';

const AddReadingItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="modal-results addreading"
      onClick={() => {
        dispatch(addBookToReadings(book.isbn));
      }}
    >
      {book.title} {book.subtitle}
    </div>
  );
};

AddReadingItem.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }).isRequired,
};

export default AddReadingItem;
