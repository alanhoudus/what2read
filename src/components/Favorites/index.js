// == Import : local
// hooks
import { useState } from 'react';
// components
import Favorite from './FavoritesList';
import Separator from '../Reusables/Separator';
import ShowMore from '../Reusables/ShowMore';
import SearchField from '../Reusables/SearchField';

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
      <SearchField />
      <div className="favorites-books">
        <Favorite favoritesList={favoritesList} />
      </div>
      <div className="favorites-showmore">
        <ShowMore />
      </div>
    </div>
  );
};

// == Export
export default Favorites;
