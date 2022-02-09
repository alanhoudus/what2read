// == Import : local
// hooks
// import { useState } from 'react';
import { useSelector } from 'react-redux';

// components
import Suggestion from './SuggestionsList';
import SuggestedBook from '../Home/SuggestedBook';
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
  const booksListLoading = useSelector((state) => state.books.booksListDataLoading);

  return (
    <div className="suggestions">
      {booksListLoading
        ? <Loader />
        : <SuggestedBook />}
      <Separator />
      <div className="suggestions-history">
        <div className="suggestions-history books">
          {suggestionsLoading
            ? <Loader />
            : <Suggestion suggestionsList={suggestionsList} />}
        </div>
      </div>
    </div>
  );
};

// == Export
export default Suggestions;
