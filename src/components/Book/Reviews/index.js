// == Import : local
import { Trash, Edit } from 'react-feather';

import './reviews.scss';

// == Composant
const Reviews = () => (
  <div className="reviews">
    <h1>Mes reviews</h1>
    <div className="reviews-wrapper">
      <div className="reviews-wrapper--singlereview">
        <img src="https://products-images.di-static.com/image/suzanne-collins-hunger-games-tome-1/9782266260770-475x500-1.webp" alt="Couverture de la review" />
        <div className="reviews-wrapper--singlereview-infos">
          <h2>Hunger Games</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin accumsan nisi nec leo aliquet dictum. Praesent cursus, nisi in condimentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin accumsan nisi nec leo aliquet dictum. Praesent cursus, nisi in condimentum.
          </p>
          <div className="reviews-wrapper--singlereview-infos--buttons">
            <Trash color="red" />
            <Edit color="white" />
          </div>
        </div>
      </div>
    </div>
  </div>

);

// == Export
export default Reviews;
