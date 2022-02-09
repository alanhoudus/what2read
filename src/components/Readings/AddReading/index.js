// Import
// hooks
import { useDispatch, useSelector } from 'react-redux';
import { addReadingSearchedBooksList, updateAddReadingValue } from '../../../actions/search';
// actions
import { togglePopUp } from '../../../actions/user';
import { findSearchedBooks } from '../../../selectors/books';
// components
import Field from '../../Reusables/Field';
import AddReadingList from './AddReadingList';
// scss
import './addReading.scss';

const AddReading = () => {
  const addReadingUserInput = useSelector((state) => state.bookSearch.addReadingInputSearch);
  const booksList = useSelector((state) => state.books.booksList);
  const addReadingBooksList = useSelector((state) => state.bookSearch.addReadingSearchedBooksList);
  const dispatch = useDispatch();

  return (
    <div className="modal-overlay">
      <div className="modal-background">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const userSearchedBooksList = findSearchedBooks(booksList, addReadingUserInput);
            dispatch(addReadingSearchedBooksList(userSearchedBooksList));
          }}
        >
          <div className="modal-wrapper">
            <div className="modal-search">
              <h3>Ajouter un livre</h3>
              <button
                type="button"
                className="modal-close-button"
                onClick={() => {
                  dispatch(togglePopUp(false));
                }}
              >
                <span>&times;</span>
              </button>
            </div>
            <Field
              className="modal-input"
              name="addReadingInputSearch"
              id="addReadingInputSearch"
              type="text"
              placeholder="Rechercher un livre.."
              value={addReadingUserInput}
              onChange={(identifier, newValue) => {
                const userSearchedBooksList = findSearchedBooks(booksList, addReadingUserInput);
                dispatch(addReadingSearchedBooksList(userSearchedBooksList));
                const action = updateAddReadingValue(identifier, newValue);
                dispatch(action);
              }}
            />
          </div>
          <div className="modal-results">
            <AddReadingList addReadingBooksList={addReadingBooksList} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReading;
