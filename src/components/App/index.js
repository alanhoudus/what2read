// == Import
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Book from '../Book';
import Contact from '../Contact';
import Profile from '../Profile';
import Footer from '../Footer';
import RegistrationForm from '../RegistrationForm';
import Search from '../Search';
import NotFound from '../NotFound';
import EditProfile from '../Profile/EditProfile';

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
        <Route path="/recherche" key="recherche" element={<Search />} />
        <Route path="*" key="notfound" element={<NotFound />} />
        <Route path="/profile" key="profile" element={<Profile />} />
        <Route path="/book" key="book" element={<Book />} />
        <Route path="/profile/edit" key="profile-edit" element={<EditProfile />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

// == Export
export default App;
