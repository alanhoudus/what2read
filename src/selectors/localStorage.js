const persistantState = 'persistantState';

/**
 * loadFromLocalStorage
 * allow us to use our data save in localstorage as initialState
 */

export const loadFromLocalStorage = () => {
  try {
    const clonedState = localStorage.getItem(persistantState);
    if (clonedState === null) return undefined;
    // (JSON.parse) our json -> objet js
    return JSON.parse(clonedState);
  }
  catch (e) {
    console.warn(e);
    return undefined;
  }
};

/**
 * saveToLocalStorage
 * allow us to save our redux state to local storage
 */

export const saveToLocalStorage = (state) => {
  try {
    // our (JSON.stringify) objet js -> json
    const clonedState = JSON.stringify(state);
    localStorage.setItem(persistantState, clonedState);
  }
  catch (e) {
    console.warn(e);
  }
};
