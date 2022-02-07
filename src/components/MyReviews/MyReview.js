// hooks
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// react-feather
import { Trash, Edit } from 'react-feather';
// react-router-dom
import { Link } from 'react-router-dom';
// prop-types
import PropTypes from 'prop-types';
// actions
import { removeReview } from '../../actions/addReview';

const MyReview = ({
  content,
  title,
  book,
  id,
}) => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const dispatch = useDispatch();

  if (isDisplayed === false) {
    return <div />;
  }
  return (
    <div className="reviews-wrapper--singlereview">
      <Link
        to={`/livre/${book.isbn}`}
        key={book.isbn}
      >
        <img src={book.cover} className="reviews-wrapper--singlereview-img" alt="Couverture du livre" />
      </Link>
      <div className="reviews-wrapper--singlereview-infos">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="reviews-wrapper--singlereview-infos--buttons">
          <Link
            to={`/profil/review/edition/${id}`}
            key={id}
          >
            <Edit
              color="white"
              className="button-edit"
            />
          </Link>
          <Trash
            className="button-delete"
            color="red"
            onClick={() => {
              dispatch(removeReview(id));
              setIsDisplayed(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

MyReview.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MyReview;
