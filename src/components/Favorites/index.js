// == Import : local
// hooks
import { useState } from 'react';
// components
import Field from '../Field';
import Favorite from './FavoritesList';
// mock data
import { FAVORITES_BOOK_LIST, FAVORITE_PRESENTATION } from '../../data/favorites';

import './favorites.scss';

// == Composant
const Favorites = () => {
  // eslint-disable-next-line no-unused-vars
  const [favoritesList, setFavoriteList] = useState(FAVORITES_BOOK_LIST);
  // eslint-disable-next-line no-unused-vars
  const [favoritesPresentation, setFavoritePresentation] = useState(FAVORITE_PRESENTATION);

  return (
    <div className="favorites">
      <div className="favorites-presentation">
        <h1>{favoritesPresentation.title}</h1>
        <p>{favoritesPresentation.presentation}</p>
      </div>
      <div className="favorites-separator" />
      <Field placeholder="Rechercher dans mes favoris" className="favorites-search" type="text" />
      <div className="favorites-books">
        <Favorite favoritesList={favoritesList} />
      </div>
    </div>
  );
};

// == Export
export default Favorites;
