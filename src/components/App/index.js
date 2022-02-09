// == Import
// react-router-dom
import { Routes, Route, useLocation } from 'react-router-dom';
// hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// actions
import { getBooksData, getReviewsData } from '../../actions/books';
import { getSuggestionsData } from '../../actions/suggestions';
import { getUserData } from '../../actions/user';

// components
import Header from '../Header';
import Home from '../Home';
import Book from '../Book';
import Contact from '../Contact';
import Profile from '../Profile';
import Footer from '../Footer';
import RegistrationForm from '../RegistrationForm';
import RegistrationReview from '../RegistrationReview';
import Search from '../Search';
import Readings from '../Readings';
import Favorites from '../Favorites';
import NotFound from '../Error';
import Reviews from '../MyReviews';
import EditProfile from '../Profile/EditProfile';
import Suggestions from '../Suggestions';
import LogoProfil from '../Profile/LogoProfil';
import PopUpInfo from '../Reusables/PopUpInfo';
import Loader from './Loader';
import LogIn from '../LogIn';
import EditReview from '../RegistrationReview/EditReview';
import OtherUserProfile from '../OtherUserProfile';
// scss
import './app.scss';

// == Composant
const App = () => {
  const profileIsLoaded = useSelector((state) => state.userProfile.profileIsLoading);
  const logInfo = useSelector((state) => state.userLogin.logInfo);
  const dataIsLoading = useSelector((state) => state.books.dataLoading);
  // const getReviewByBook = useSelector((state) => state.books.getReviewNyBook);
  const username = useSelector((state) => state.userProfile.username);
  const message = useSelector((state) => state.userLogin.message);
  const isLogged = useSelector((state) => state.userProfile.logged);
  const token = useSelector((state) => state.userProfile.token);
  const dispatch = useDispatch();

  const location = useLocation();
  // pour chaque rendu ou l'url a changé
  useEffect(() => {
    // on ramène en haut de page
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    dispatch(getBooksData());
    dispatch(getSuggestionsData());
    dispatch(getReviewsData());
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getUserData());
    }
  }, [token]);

  if (dataIsLoading) {
    return <Loader />;
  }
  return (
    <div className="app">
      <Header />
      {logInfo && <PopUpInfo username={username} message={message} />}
      {(!profileIsLoaded && isLogged) && <LogoProfil />}
      <div className="app-wrapper">
        <Routes>
          <Route path="/" key="home" element={<Home />} />
          <Route path="/contact" key="contact" element={<Contact />} />
          <Route path="/inscription" key="inscription" element={<RegistrationForm />} />
          <Route path="/profil/favoris" key="mes-favoris" element={<Favorites />} />
          <Route path="/recherche" key="recherche" element={<Search />} />
          <Route path="/ajout-review/:isbn" key="add-review" element={<RegistrationReview />} />
          <Route path="/profil/lectures" key="mes-lectures" element={<Readings />} />
          <Route path="*" key="notfound" element={<NotFound />} />
          <Route path="/profil" key="profil" element={<Profile />} />
          <Route path="/livre/:isbn" key="livre" element={<Book />} />
          <Route path="/profil/reviews" key="reviews" element={<Reviews />} />
          <Route path="/profil/review/edition/:id" key="reviews-edition" element={<EditReview />} />
          <Route path="/profil/edition" key="profil-edition" element={<EditProfile />} />
          <Route path="/suggestions/historique" key="suggestions-historique" element={<Suggestions />} />
          <Route path="/connexion" key="connexion" element={<LogIn />} />
          <Route path="/profil/:userId" key="utilisateur" element={<OtherUserProfile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

// == Export
export default App;
