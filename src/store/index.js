


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { reducer as userReducer } from './user';
import { reducer as websocketReducer, middleware as websocketMiddleware } from './websocket';
import { reducer as messagesReducer } from './messages';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

const history = createBrowserHistory()

const reducer = combineReducers({
  websocket: websocketReducer,
  messages: messagesReducer,
  router: routerReducer,
  user: userReducer,
  form: formReducer,
})
const middleware = applyMiddleware(websocketMiddleware('ws://localhost:8085/api/stream'))
const store = createStore(reducer, composeWithDevTools(middleware,
  applyMiddleware(thunk, routerMiddleware(history)),
  // other store enhancers if any
));

startListener(history, store)

export default store
