import {
  useParams,
  Link,
  useNavigate,
  Navigate,
} from 'react-router-dom';
// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import components
import Field from '../../Reusables/Field';
import TextArea from '../../Reusables/TextArea';
// selectors
import { findReview } from '../../../selectors/books';
// actions
import { editFieldReview, sendEditedReview, displayEditedReviewContent } from '../../../actions/addReview';

// import scss
import './editreview.scss';

const EditReview = () => {
  // Get the isbn in the URL
  const { id } = useParams();
  const title = useSelector((state) => state.addReview.editTitle);
  const content = useSelector((state) => state.addReview.editContent);
  const review = useSelector((state) => findReview(state.userProfile.reviews, Number(id)));
  const isLogged = useSelector((state) => state.userProfile.logged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayEditedReviewContent(review.title, review.content));
  }, []);

  // If user isn't logged in, redirect to the login
  if (!isLogged) {
    return <Navigate to="/connection" />;
  }
  return (
    <div className="addReview">
      <h2 className="addReview-title">Ecrit une review</h2>
      <form
        className="addReview-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(sendEditedReview(review.id));
          navigate('/profil/reviews');
        }}
      >
        <div className="addReview-form book">
          <Link
            to={`/livre/${review.book.isbn}`}
            key={review.book.isbn}
          >
            <h3 className="addReview-form titleBook">{review.book.title}</h3>
          </Link>
        </div>
        <Field
          id="title"
          type="text"
          placeholder="Mets un titre à ta review"
          className="addReview-field title"
          name="editTitle"
          minLength="5"
          value={title}
          onChange={(newValue, identifier) => {
            const actionUpdate = editFieldReview(identifier, newValue);
            dispatch(actionUpdate);
          }}
        />
        <div className="addReview-jumbotron">
          <Link
            to={`/livre/${review.book.isbn}`}
            key={review.book.isbn}
          >
            <img src={review.book.cover} alt="titleBook" className="addReview-cover" />
          </Link>
          <TextArea
            placeholder="Texte de la review"
            className="addReview-field content"
            minLength="20"
            name="editContent"
            value={content}
            onChange={(newValue, identifier) => {
              const action = editFieldReview(identifier, newValue);
              dispatch(action);
            }}
          />
        </div>
        <button
          type="submit"
          className="addReview-submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};
export default EditReview;
