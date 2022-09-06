import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import throttle from 'lodash.throttle';
import { loadState, saveState } from "../helpers/localStorage";
import { setCandleBTC } from "./reducers/crypto.reducer";
import { error } from './reducers/error.reducer';

const middlewareEnhancer = applyMiddleware(thunk, logger);
const composedEnhancers = compose(middlewareEnhancer);
const persistedState = loadState();

export const store = createStore(
  combineReducers({
    setCandleBTC,
    error,
  }),
  persistedState,
  composedEnhancers
);

// https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
store.subscribe(throttle(() => {
  saveState({});
}, 1000));

/*
 applyMiddleware(thunk, logger) - logger must be the last middleware in chain, otherwise it will log thunk and
 promise, not actual actions
 https://github.com/LogRocket/redux-logger/issues/302
 */