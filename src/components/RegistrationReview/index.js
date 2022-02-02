import { useParams, Link } from 'react-router-dom';
// hooks
import { useSelector, useDispatch } from 'react-redux';
// actions
import { findBook } from '../../selectors/books';
// import components
import Field from '../Reusables/Field';
import TextArea from '../Reusables/TextArea';
// actions
import { updateTitleWriteReview, updateWriteReview } from '../../actions/addReview';
// import asset
// import profilLogo from '../../assets/images/profileicon.png';
// import scss
import './registrationReview.scss';

const RegistrationReview = () => {
  // Get the isbn in the URL
  const { isbn } = useParams();
  // Find the book in the list of books corresponding to the isbn in the URL
  const book = useSelector((state) => findBook(state.books.booksList, isbn));
  // controlled input search
  const inputTitleReview = useSelector((state) => state.addReview.inputTitleReview);
  const inputContentReview = useSelector((state) => state.addReview.inputContentReview);
  const dispatch = useDispatch();
  return (

    <div className="addReview">
      <h2 className="addReview-title">Ecrit une review</h2>
      <form className="addReview-form">
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
          onChange={(newValue) => {
            const actionUpdate = updateTitleWriteReview(newValue);
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
            onChange={(newValue) => {
              const actionUpdate = updateWriteReview(newValue);
              dispatch(actionUpdate);
            }}
          />
        </div>
        <button type="submit" className="addReview-submit">Envoyer</button>
      </form>
    </div>
  );
};
export default RegistrationReview;
