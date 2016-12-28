import { createStore, combineReducers, applyMiddleware } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { reducers } from './ducks'
import { searchMiddleware } from './middleware'
import { epics } from './epic'

const rootReducer = combineReducers(reducers, {})

export const configureObservableStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(createEpicMiddleware(epics))
  )
}

export const configureMiddlewareStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(searchMiddleware)
  )
}

