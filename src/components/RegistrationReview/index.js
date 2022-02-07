import {
  useParams,
  Link,
  Navigate,
  useNavigate,
} from 'react-router-dom';
// hooks
import { useSelector, useDispatch } from 'react-redux';

// import components
import Field from '../Reusables/Field';
import TextArea from '../Reusables/TextArea';
// actions
import {
  updateTitleWriteReview,
  updateWriteReview,
  handlePostReview,
} from '../../actions/addReview';
import { findBook } from '../../selectors/books';
// import asset
// import profilLogo from '../../assets/images/profileicon.png';
// import scss
import './registrationReview.scss';

const RegistrationReview = () => {
  // Get the isbn in the URL
  const { isbn } = useParams();
  // Find the book in the list of books corresponding to the isbn in the URL
  const book = useSelector((state) => findBook(state.books.booksList, isbn));
  const inputTitleReview = useSelector((state) => state.addReview.title);
  const inputContentReview = useSelector((state) => state.addReview.content);
  const isLogged = useSelector((state) => state.userProfile.logged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          dispatch(handlePostReview(isbn));
          navigate('/profil/reviews');
        }}
      >
        <div className="addReview-form book">
          <Link
            to={`/livre/${book.isbn}`}
            key={book.isbn}
          >
            <h3 className="addReview-form titleBook">{book.title}</h3>
          </Link>
        </div>
        <Field
          id="title"
          type="text"
          placeholder="Mets un titre à ta review"
          className="addReview-field title"
          value={inputTitleReview}
          onChange={(newTitle) => {
            const actionUpdate = updateTitleWriteReview(book.isbn, newTitle);
            dispatch(actionUpdate);
          }}
        />
        <div className="addReview-jumbotron">
          <Link
            to={`/livre/${book.isbn}`}
            key={book.isbn}
          >
            <img src={book.cover} alt="titleBook" className="addReview-cover" />
          </Link>
          <TextArea
            placeholder="Texte de la review"
            className="addReview-field content"
            value={inputContentReview}
            onChange={(newContent) => {
              const actionUpdate = updateWriteReview(book.isbn, newContent);
              dispatch(actionUpdate);
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
export default RegistrationReview;
