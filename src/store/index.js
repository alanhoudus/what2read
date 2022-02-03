import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers/reducer';
import logMiddleware from '../middlewares/logMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import booksAPIMiddleware from '../middlewares/booksAPIMiddleware';
import profilApiMiddleware from '../middlewares/profilApiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    booksAPIMiddleware,
    profilApiMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
