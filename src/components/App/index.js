// == Import
// react-router-dom
import { Routes, Route } from 'react-router-dom';

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
import NotFound from '../NotFound';
import Reviews from '../MyReviews';
import EditProfile from '../Profile/EditProfile';
import Suggestions from '../Suggestions';

// scss
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
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
      </Routes>
      <Footer />
    </div>
  </div>
);

// == Export
export default App;
