import { createStore, combineReducers, applyMiddleware } from "redux"
import { reducers } from './ducks'
import { searchMiddleware } from './middleware'

export const configureStore = () => {
  return createStore(
    combineReducers(reducers, {}),
    applyMiddleware(searchMiddleware)
  )
}

