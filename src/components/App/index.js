// == Import
import { Routes, Route } from 'react-router-dom';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Contact from '../Contact';
import RegistrationForm from '../RegistrationForm';
import Search from '../Search';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" key="home" element={<Home />} />
      <Route path="/contact" key="contact" element={<Contact />} />
      <Route path="/inscription" key="inscription" element={<RegistrationForm />} />
      <Route path="/recherche" key="recherche" element={<Search />} />
    </Routes>
  </div>
);

// == Export
export default App;
