// == Import : local
// hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// react-router-dom
import { Navigate } from 'react-router-dom';
// components
import FavoritesList from './FavoritesList';
import Separator from '../Reusables/Separator';
import SearchField from '../Reusables/SearchField';
import Loader from '../App/Loader';

// actions
import { updateFavoriteSearchValue, searchedFavoritesBooksList, getUserFavoritesData } from '../../actions/user';
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
  const isLogged = useSelector((state) => state.userProfile.logged);
  const token = useSelector((state) => state.userProfile.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserFavoritesData());
    }
  }, [token]);
  // If user isn't logged in, redirect to the login
  if (!isLogged) {
    return <Navigate to="/connection" />;
  }
  if (favoritesLoading) {
    return <Loader />;
  }
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
        {favoritesList.length === 0
          ? <p>Vous n'avez pas encore ajouté de favoris</p>
          : <FavoritesList favoritesList={favoritesList} />}
      </div>
    </div>
  );
};

// == Export
export default Favorites;
