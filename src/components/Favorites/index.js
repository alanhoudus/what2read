// == Import : local
// hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import FavoritesList from './FavoritesList';
import Separator from '../Reusables/Separator';
import ShowMore from '../Reusables/ShowMore';
import SearchField from '../Reusables/SearchField';
import Loader from '../App/Loader';

// actions
import { updateFavoriteSearchValue, searchedFavoritesBooksList } from '../../actions/user';
// selectors
import { findSearchedBooks } from '../../selectors/books';
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
  const userInput = useSelector((state) => state.userProfile.searchFavoriteInput);
  const booksList = useSelector((state) => state.books.booksList);

  const dispatch = useDispatch();
  return (
    <div className="favorites">
      <div className="favorites-presentation">
        <h2>{favoritesPresentation.title}</h2>
        <p>{favoritesPresentation.presentation}</p>
      </div>
      <Separator />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const userSearchedFavoritesBooksList = findSearchedBooks(booksList, userInput);
          dispatch(searchedFavoritesBooksList(userSearchedFavoritesBooksList));
        }}
      >
        <SearchField
          type="text"
          className="search--field"
          name="searchFavoriteInput"
          id="searchFavoriteInput"
          placeholder="Mes favoris..."
          value={userInput}
          onChange={(newValue, identifier) => {
            const action = updateFavoriteSearchValue(identifier, newValue);
            dispatch(action);
          }}
        />
      </form>
      <div className="favorites-books">
        {favoritesLoading
          ? <FavoritesList favoritesList={favoritesList} />
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
