// == Import
// react-router-dom
import { Routes, Route } from 'react-router-dom';
// hooks
import { useSelector } from 'react-redux';

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
import ConnectionProfile from '../Profile/ConnectionProfile';

import LogIn from '../LogIn';
// scss
import './app.scss';

// == Composant
const App = () => {
  const isLogged = useSelector((state) => state.userLogin.logged);
  return (
    <div className="app">
      <Header />
      <ConnectionProfile />
      {isLogged && <LogoProfil />}
      <div className="app-wrapper">
        <Routes>
          <Route path="/" key="home" element={<Home />} />
          <Route path="/contact" key="contact" element={<Contact />} />
          <Route path="/inscription" key="inscription" element={<RegistrationForm />} />
          <Route path="/profil/favoris" key="mes-favoris" element={<Favorites />} />
          <Route path="/recherche" key="recherche" element={<Search />} />
          <Route path="/ajout-review" key="add-review" element={<RegistrationReview />} />
          <Route path="/profil/lectures" key="mes-lectures" element={<Readings />} />
          <Route path="*" key="notfound" element={<NotFound />} />
          <Route path="/profil" key="profil" element={<Profile />} />
          <Route path="/livre" key="livre" element={<Book />} />
          <Route path="/profil/reviews" key="reviews" element={<Reviews />} />
          <Route path="/profil/edition" key="profil-edition" element={<EditProfile />} />
          <Route path="/suggestions/historique" key="suggestions-historique" element={<Suggestions />} />
          <Route path="/connection" key="connection" element={<LogIn />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

// == Export
export default App;
