// == Import
import { Link } from 'react-router-dom';
import './suggestions.scss';
import SuggestedBook from '../Home/SuggestedBook';

// == Composant
const Suggestions = () => (
  <div className="suggestions">
    <SuggestedBook />
    <div className="suggestions-separator" />
    <div className="suggestions-history">
      <div className="suggestions-history book">
        <Link
          to="/livre"
          key="1"
        >
          <img className="suggestions-history book-cover" src="https://products-images.di-static.com/image/vincent-ferre-lire-j/9782266242912-475x500-1.webp" alt="couverture du livre" />
          <h3 className="suggestions-history book-title">Lire J. R. R. Tolkien</h3>
          <h4 className="suggestions-history book-title">10.02.2022</h4>
        </Link>
      </div>
      <div className="suggestions-history book">
        <Link
          to="/livre"
          key="1"
        >
          <img className="suggestions-history book-cover" src="https://products-images.di-static.com/image/vincent-ferre-lire-j/9782266242912-475x500-1.webp" alt="couverture du livre" />
          <h3 className="suggestions-history book-title">Lire J. R. R. Tolkien</h3>
          <h4 className="suggestions-history book-title">10.02.2022</h4>
        </Link>
      </div>
      <div className="suggestions-history book">
        <Link
          to="/livre"
          key="1"
        >
          <img className="suggestions-history book-cover" src="https://products-images.di-static.com/image/vincent-ferre-lire-j/9782266242912-475x500-1.webp" alt="couverture du livre" />
          <h3 className="suggestions-history book-title">Lire J. R. R. Tolkien</h3>
          <h4 className="suggestions-history book-title">10.02.2022</h4>
        </Link>
      </div>
    </div>
    <button type="button" className="suggestions-showMore">Voir plus</button>
  </div>
);

// == Export
export default Suggestions;