// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Contact from '../Contact';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* <Home /> */}
    <Contact />
  </div>
);

// == Export
export default App;
