// == Import : local
// hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';
// components
import Favorite from './FavoritesList';
import Separator from '../Reusables/Separator';
import ShowMore from '../Reusables/ShowMore';
import SearchField from '../Reusables/SearchField';
import Loader from '../App/Loader';

// mock data
import { FAVORITE_PRESENTATION } from '../../data/favorites';

// scss
import './favorites.scss';

// == Composant
const Favorites = () => {
  // eslint-disable-next-line no-unused-vars
  const [favoritesPresentation, setFavoritePresentation] = useState(FAVORITE_PRESENTATION);
  const favoritesList = useSelector((state) => state.userProfile.favorites);
  const favoritesLoading = useSelector((state) => state.userProfile.favoritesLoading);

  return (
    <div className="favorites">
      <div className="favorites-presentation">
        <h2>{favoritesPresentation.title}</h2>
        <p>{favoritesPresentation.presentation}</p>
      </div>
      <Separator />
      <SearchField />
      <div className="favorites-books">
        {favoritesLoading
          ? <Favorite favoritesList={favoritesList} />
          : <Loader />}
      </div>
      <div className="favorites-showmore">
        <ShowMore />
      </div>
    </div>
  );
};

// == Export
export default Favorites;
