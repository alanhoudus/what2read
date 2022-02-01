// == Import : local
// hooks
// import { useState } from 'react';
import { useSelector } from 'react-redux';

// components
import Suggestion from './SuggestionsList';
import SuggestedBook from '../Home/SuggestedBook';
import ShowMore from '../Reusables/ShowMore';
import Separator from '../Reusables/Separator';
import Loader from '../App/Loader';

// mock data
// import { SUGGESTIONS_LIST } from '../../data/suggestions';

// scss
import './suggestions.scss';

// == Composant
const Suggestions = () => {
  // eslint-disable-next-line no-unused-vars
  // const [suggestionsList, setSuggestionsList] = useState(SUGGESTIONS_LIST);
  const suggestionsList = useSelector((state) => state.books.suggestionsList);
  const suggestionsLoading = useSelector((state) => state.books.suggestionsDataLoading);

  return (
    <div className="suggestions">
      <SuggestedBook />
      <Separator />
      <div className="suggestions-history">
        <div className="suggestions-history book">
          {suggestionsLoading
            ? <Suggestion suggestionsList={suggestionsList} />
            : <Loader />}
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
