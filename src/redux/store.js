import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
// ^^ the above persistor helps to enable a persisted version of the store through local storage

// export default {store, persistor};
// ^^ doing it this way resulted in a compile bug ... sourced answer as needing export on lines 9 and 11, and to remove line 14