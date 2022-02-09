// == Import : local
// hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// react-router-dom
import { Link } from 'react-router-dom';
// mock data
import CARROUSEL_REVIEWS_LIST from '../../../data/carrousel';
// actions
import { randomReviewsCarrousel } from '../../../selectors/reviews';
import { saveCarrouselReviews } from '../../../actions/books';

import './review.scss';

// == Composant
const Review = () => {
  // eslint-disable-next-line no-unused-vars
  const [carrouselReviewsList, setCarrouselReviewsList] = useState(CARROUSEL_REVIEWS_LIST);
  const [activeCarrouselSlide, setActiveCarrouselSlide] = useState(0);
  const reviewsList = useSelector((state) => state.books.allReviews);
  const carrouselReviews = useSelector((state) => state.books.carrouselReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    const randomizedReviews = randomReviewsCarrousel(reviewsList);
    dispatch(saveCarrouselReviews(randomizedReviews));
  }, []);

  if (reviewsList.length < 2) {
    return <div />;
  }
  return (
    <div className="review">
      <h2 className="review-title--section">Propositions de reviews</h2>
      <div className="review-container-outer">
        <div className="review-container">
          {carrouselReviews.map((slide, index) => (
            <div key={slide.id} className={index === activeCarrouselSlide ? 'review-post review-post--active' : 'review-post'}>
              <h3 className="review-booktitle">{slide.book.title}</h3>
              <h4 className="review-title">{slide.title}</h4>
              <p className="review-content">
                {slide.content}
              </p>
              <div className="review-author">
                <Link
                  to={`profil/${slide.user.id}`}
                  key={slide.user.username}
                >
                  <img src={slide.user.picture} alt="Avatar de l'auteur" className="review-author--avatar" />
                  <p className="review-author--name">{slide.user.username}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="review-controls">
        {carrouselReviews.map((slide, index) => (
          <li
            key={slide.id}
            className={index === activeCarrouselSlide ? 'review-controls-item review-controls-item--active' : 'review-controls-item'}
            onClick={() => setActiveCarrouselSlide(index)}
          />
        ))}
      </ul>
    </div>
  );
};

// == Export
export default Review;
