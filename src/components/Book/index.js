// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// react-router-dom
import { useParams, Link } from 'react-router-dom';
// actions
import { findBook, frenchizeDate } from '../../selectors/books';
import { getReviewByBook } from '../../actions/books';
// components
import Separator from '../Reusables/Separator';
import GenresList from './GenresList';
// scss
import './book.scss';
import './genres.scss';
import ReviewsList from './Reviews/ReviewsList';

const Book = () => {
  // Get the isbn in the URL
  const { isbn } = useParams();
  // Find the book in the list of books corresponding to the isbn in the URL
  const book = useSelector((state) => findBook(state.books.booksList, isbn));
  // Map on the array of objects of the authors
  const authors = book.authors.map((author) => author.name);
  const reviewsListByBook = useSelector((state) => state.books.reviewsListByBook);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviewByBook(isbn));
  }, []);
  return (
    <div>
      <div className="book">
        <div className="book-contentGroup">
          <h2 className="book-content title">{book.title}</h2>
          <div className="book-content description">
            <img alt="book-cover" src={book.cover} className="book-content cover" />
            <div className="book-content infos">
              <div className="book-content infos-subtitle">Sous-titre : {book.subtitle}</div>
              <div className="book-content infos-author">Auteur : {authors}</div>
              <div className="book-content infos-date">Date de parution : {frenchizeDate(book.publicationDate)}</div>
              <div className="book-content infos-editor">Edition : {book.publisher}</div>
              <div className="book-content infos-isbn">IBSN : {book.isbn}</div>
              <div className="book-content infos-nbpages">Nombre de pages :</div>
              <div className="book-content infos">
                <GenresList genresList={book.genres} />
              </div>
              <Link
                to={`/ajout-review/${isbn}`}
              >
                <button type="button" className="book-buttonReview">Ajouter une review</button>
              </Link>
            </div>
            <div className="book-content summary">
              <p>{book.description}</p>
            </div>
            <Separator />
            <div className="reviews-wrapper">
              <ReviewsList reviewsList={reviewsListByBook} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
