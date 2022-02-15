import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers/reducer';
import logMiddleware from '../middlewares/logMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import booksAPIMiddleware from '../middlewares/booksAPIMiddleware';
import profilApiMiddleware from '../middlewares/profilApiMiddleware';
import { loadFromLocalStorage, saveToLocalStorage } from '../selectors/localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    booksAPIMiddleware,
    profilApiMiddleware,
  ),
);

// createStore -> en 2ème argument, on peut initialiser le state
const store = createStore(reducer, loadFromLocalStorage(), enhancers);

// subscribe -> une méthode du store qui permet d'executer un callback à chaque changement du state
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
