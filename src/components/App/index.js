// == Import
import { Routes, Route } from 'react-router-dom';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Contact from '../Contact';
import Footer from '../Footer';
import RegistrationForm from '../RegistrationForm';
import RegistrationReview from '../RegistrationReview';
import Search from '../Search';

import NotFound from '../NotFound';
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
        <Route path="/ajout-review" key="add-review" element={<RegistrationReview />} />
        <Route path="*" key="notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

// == Export
export default App;
