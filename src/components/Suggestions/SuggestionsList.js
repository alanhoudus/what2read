import PropTypes from 'prop-types';
import SuggestionsItem from './SuggestionsItem';

const SuggestionsList = ({ suggestionsList }) => (
  // For each suggestion in the list, create an item
  suggestionsList.map((book) => (
    <SuggestionsItem key={book.key} book={book} />
  ))
);

SuggestionsList.protoTypes = {
  suggestionsList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SuggestionsList;
