// == Import : local
// hooks
import { useState } from 'react';
// mock data
import CARROUSEL_REVIEWS_LIST from '../../../data/carrousel';

// imgs
import profileicon from '../../../assets/images/profileicon.png';
// import arrow from '../../../assets/images/arrow.png';

import './review.scss';

// == Composant
const Review = () => {
  // eslint-disable-next-line no-unused-vars
  const [carrouselReviewsList, setCarrouselReviewsList] = useState(CARROUSEL_REVIEWS_LIST);
  const [activeCarrouselSlide, setActiveCarrouselSlide] = useState(0);

  // function nextSlide() {
  //   if (activeCarrouselSlide === (carrouselReviewsList.length - 1)) {
  //     setActiveCarrouselSlide(0);
  //   }
  //   else {
  //     setActiveCarrouselSlide(activeCarrouselSlide + 1);
  //   }
  // }
  // function previousSlide() {
  //   if (activeCarrouselSlide === 0) {
  //     setActiveCarrouselSlide((carrouselReviewsList.length - 1));
  //   }
  //   else {
  //     setActiveCarrouselSlide(activeCarrouselSlide - 1);
  //   }
  // }

  return (
    <div className="review">
      <div className="review-separator" />
      <h2 className="review-title--section">Propositions de reviews</h2>
      {/* <img
        src={arrow}
        alt="Review de gauche"
        className="review-arrow left"
        onClick={() => {
          previousSlide();
        }}
      />
      <img
        src={arrow}
        alt="Review de droite"
        className="review-arrow right"
        onClick={() => {
          nextSlide();
        }}
      /> */}
      <div className="review-container-outer">
        <div className="review-container">
          {carrouselReviewsList.map((slide, index) => (
            <div key={slide.reviewContent} className={index === activeCarrouselSlide ? 'review-post review-post--active' : 'review-post'}>
              <h3 className="review-booktitle">{slide.bookTitle}</h3>
              <h4 className="review-title">{slide.reviewTitle}</h4>
              <p className="review-content">
                {slide.reviewContent}
              </p>
              <div className="review-author">
                <img src={profileicon} alt="Avatar de l'auteur" className="review-author--avatar" />
                <p className="review-author--name">{slide.auhorName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="review-controls">
        {carrouselReviewsList.map((slide, index) => (
          <li
            key={slide.reviewContent}
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
