import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import UserReducer from './reducers/UserReducer';
import ContactsReducer from './reducers/ContactsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    user: UserReducer,
    contact: ContactsReducer,
  })
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store