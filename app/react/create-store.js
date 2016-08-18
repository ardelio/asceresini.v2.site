import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default data => {
  const reducer = combineReducers(reducers)
  const store = createStore(reducer, data, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store
}
