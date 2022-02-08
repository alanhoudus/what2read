// react-router-dom
import { Link } from 'react-router-dom';

// == Import scss
import './notfound.scss';
// assets
import w2rlogo from '../../assets/images/w2rlogo.png';

// == Composant
const NotFound = () => (
  <div className="bookAnimation">
    <img src={w2rlogo} alt="logo" className="bookAnimation-logo" />
    <h1 className="bookAnimation-title">Book not found</h1>
    <div className="back" />
    <div className="page6">
      <Link
        to="/"
      >
        <p className="bookAnimation-link">Retour à l'accueil</p>
      </Link>
    </div>
    <div className="page5" />
    <div className="page4" />
    <div className="page3" />
    <div className="page2" />
    <div className="page1" />
    <div className="front" />
  </div>
  // <div className="notfound">
  //   <h2 className="notfound-title">Erreur 404</h2>
  //   <p>La page que vous avez demandé n'existe pas</p>
  // </div>
);

// == Export
export default NotFound;
