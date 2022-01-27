// == Import : local
import './footer.scss';

// == Composant
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-credits">
        What2Read - {year}
      </div>
    </footer>
  );
};

// == Export
export default Footer;
