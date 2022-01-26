// == Import
import './suggestions.scss';
import SuggestedBook from '../Home/SuggestedBook';

// == Composant
const Suggestions = () => (
  <div className="suggestions">
    <SuggestedBook />
    <div className="suggestions-history">

    </div>
  </div>
);

// == Export
export default Suggestions;
