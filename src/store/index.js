import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as userReducer } from './user';
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'

const history = createBrowserHistory()

const middleware = composeWithDevTools(applyMiddleware(), routerMiddleware(history))

const reducer = combineReducers({
  user: userReducer,
  form: formReducer,
  router: routerReducer,
})

//const middleware = routerMiddleware(history)

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

startListener(history, store)

export default store