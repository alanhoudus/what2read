// hooks
import { useState } from 'react';
// mock data
import { SUGGESTIONS_LIST, SUGGESTIONS_PRESENTATION } from '../../data/suggestions';

import Suggestion from './SuggestionsList';
import './suggestions.scss';
import SuggestedBook from '../Home/SuggestedBook';
import ShowMore from '../Reusables/ShowMore';
import Separator from '../Reusables/Separator';

// == Composant
const Suggestions = () => {
  // eslint-disable-next-line no-unused-vars
  const [suggestionsList, setSuggestionsList] = useState(SUGGESTIONS_LIST);
  // eslint-disable-next-line no-unused-vars
  const [suggestionsPresentation, setSuggestionsPresentation] = useState(SUGGESTIONS_PRESENTATION);

  return (
    <div className="suggestions">
      <SuggestedBook />
      <Separator />
      <div className="suggestions-history">
        <div className="suggestions-history book">
          <Suggestion suggestionsList={suggestionsList} />
        </div>
      </div>
      <div className="suggestions-showmore">
        <ShowMore />
      </div>
    </div>
  );
};

// == Export
export default Suggestions;
