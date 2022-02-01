export const GET_SUGGESTIONS_DATA = 'GET_SUGGESTIONS_DATA';
export const SAVE_SUGGESTIONS = 'SAVE_SUGGESTIONS';
export const SUGGESTIONS_LOADED = 'SUGGESTIONS_LOADED';

export const suggestionsLoaded = () => ({
  type: SUGGESTIONS_LOADED,
});

export const getSuggestionsData = () => ({
  type: GET_SUGGESTIONS_DATA,
});

/**
 * Store the array in the state
 * @param {Array of objects} booksList
 * @returns
 */
export const saveSuggestions = (booksList) => ({
  type: SAVE_SUGGESTIONS,
  data: booksList,
});
