// == Import
// actions
import { useSelector } from 'react-redux';
// react-router-dom
import { Link } from 'react-router-dom';
// components
import Loader from '../../App/Loader';
// scss
import './suggestedbook.scss';

// == Composant
const SuggestedBook = () => {
  const booksListIsLoading = useSelector((state) => state.books.booksListDataLoading);
  const suggestedBook = useSelector((state) => state.books.suggestedBookOfTheDay);

  if (booksListIsLoading) {
    return <Loader />;
  }
  return (
    <div className="suggestedbook">
      <h2 className="suggestedbook-title">Suggestion du jour</h2>
      <div className="suggestedbook-infos">
        <img className="suggestedbook-cover" alt="Chtulhu couverture" src={suggestedBook.cover} />
        <h3 className="suggestedbook-booktitle">{ suggestedBook.title}</h3>
        <div className="suggestedbook-summary">
          <p>{ suggestedBook.description}</p>
          <Link
            to={`/livre/${suggestedBook.isbn}`}
            key="suggestedBook"
          >
            <button
              type="button"
              className="suggestedbook-button"
            >
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
// == Export
export default SuggestedBook;
