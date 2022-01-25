// == Import : local
import { Link } from 'react-router-dom';

import { Star } from 'react-feather';

import Field from '../Field';

import './favorites.scss';

// == Composant
const Favorites = () => (
  <div className="favorites">
    <div className="favorites-presentation">
      <h1>Mes favoris</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin accumsan nisi nec leo aliquet dictum. Praesent cursus, nisi in condimentum.
      </p>
    </div>
    <div className="favorites-separator" />
    <Field placeholder="Rechercher dans mes favoris" className="favorites-search" type="text" />
    <div className="favorites-books">
      <Link
        to="/book"
        key="1"
      >
        <div className="favorites-book">
          <div className="favorites-book--cover">
            <img src="https://products-images.di-static.com/image/h-p-lovecraft-oeuvres/9782221115909-475x500-1.webp" alt="Couverture du livre favori" />
            <Star className="favorites-star" color="gold" size="40" />
          </div>
          <h2>Oeuvres</h2>
        </div>
      </Link>
      <Link
        to="/book"
        key="2"
      >
        <div className="favorites-book">
          <div className="favorites-book--cover">
            <img src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-le-seigneur-des-anneaux-integrale/9782266286268-475x500-1.webp" alt="Couverture du livre favori" />
            <Star className="favorites-star" color="gold" size="40" />
          </div>
          <h2>Le Seigneur des Anneaux - L'intégral</h2>
        </div>
      </Link>
      <Link
        to="/book"
        key="3"
      >
        <div className="favorites-book">
          <div className="favorites-book--cover">
            <img src="https://products-images.di-static.com/image/j-k-rowling-harry-potter-tome-1-harry-potter-a-l-ecole-des-sorciers/9782070584628-475x500-1.webp" alt="Couverture du livre favori" />
            <Star className="favorites-star" color="gold" size="40" />
          </div>
          <h2>Harry Potter à l'école des sorciers</h2>
        </div>
      </Link>
    </div>
  </div>
);

// == Export
export default Favorites;
