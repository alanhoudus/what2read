// react-router-dom
import { Link } from 'react-router-dom';
// == Import : local
import './footer.scss';

// == Composant
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-credits">
        <Link
          to="/contact"
        >
          <p className="footer-contact">Nous contacter</p>
        </Link>
        What2Read - {year}
      </div>
    </footer>
  );
};

// == Export
export default Footer;
