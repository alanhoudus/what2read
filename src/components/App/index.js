// == Import
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Book from '../Book';
import Contact from '../Contact';
import Profile from '../Profile';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" key="home" element={<Home />} />
      <Route path="/contact" key="contact" element={<Contact />} />
      <Route path="/profile" key="profile" element={<Profile />} />
      <Route path="/book" key="book" element={<Book />} />
    </Routes>
  </div>
);

// == Export
export default App;
