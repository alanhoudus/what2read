// == Import : local
// hooks
import { useState } from 'react';
// components
import Field from '../Field';
import Favorite from './FavoritesList';
import Separator from '../Separator';
import ShowMore from '../ShowMore';
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
        <h2>{favoritesPresentation.title}</h2>
        <p>{favoritesPresentation.presentation}</p>
      </div>
      <Separator />
      <Field
        placeholder="Rechercher dans mes favoris"
        className="favorites-search"
        type="text"
        name="quicksearch favorite"
        id="quicksearch favorite"
      />
      <div className="favorites-books">
        <Favorite favoritesList={favoritesList} />
        <ShowMore />
      </div>
    </div>
  );
};

// == Export
export default Favorites;
