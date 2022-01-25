// == Import : local
import profileicon from '../../../assets/images/profileicon.png';
import arrow from '../../../assets/images/arrow.png';

import './review.scss';

// == Composant
const Review = () => (
  <div className="review">
    <div className="review-separator" />
    <h2 className="review-title--section">Propositions de reviews</h2>
    <img src={arrow} alt="Review de gauche" className="review-arrow left" />
    <img src={arrow} alt="Review de droite" className="review-arrow right" />
    <div className="review-post">
      <h3 className="review-booktitle">La couleur tombée du ciel</h3>
      <h4 className="review-title">Titre de la review</h4>
      <p className="review-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla volutpat ut leo id maximus. Mauris porttitor pharetra magna,
        at dictum velit pulvinar lobortis. Mauris sed rhoncus nibh.
      </p>
      <div className="review-author">
        <img src={profileicon} alt="Avatar de l'auteur" className="review-author--avatar" />
        <p className="review-author--name">xXLoveCraftLoverXx</p>
      </div>
    </div>
  </div>
);

// == Export
export default Review;
