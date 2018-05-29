import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as userReducer } from './user';
import { reducer as formReducer } from 'redux-form'

const middleware = composeWithDevTools(applyMiddleware())

const reducer = combineReducers({
  user: userReducer,
  form: formReducer,
})

const store = createStore(reducer, middleware)

export default store