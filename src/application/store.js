import { compose, applyMiddleware, createStore } from "redux";
import reducers from './reducers';
import middleware from './middleware';

// dev tool
const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const configureStore = (services) => createStore(
    reducers, 
    composeEnhancers(applyMiddleware(...middleware.map(f => f(services))))
);