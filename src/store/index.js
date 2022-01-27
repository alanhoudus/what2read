import { createStore, applyMiddleware, compose } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from 'src/reducers/reducer';
import logMiddleware from '../middlewares/logMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
