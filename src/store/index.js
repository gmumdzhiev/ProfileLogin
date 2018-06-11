



import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { reducer as userReducer } from './user';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

const history = createBrowserHistory()

const reducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  form: formReducer,
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history)),

));

startListener(history, store)

export default store
