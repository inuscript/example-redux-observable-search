import { createStore, combineReducers, applyMiddleware } from "redux"
import { reducers } from './reducers'
import { searchMiddleware } from './middleware'

export const configureStore = () => {
  return createStore(
    combineReducers(reducers, {}),
    applyMiddleware(searchMiddleware)
  )
}

