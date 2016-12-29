import { createStore, combineReducers, applyMiddleware } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { reducers } from './reducers'
import { epics } from './epic'

export const configureStore = () => {
  return createStore(
    combineReducers(reducers, {}),
    applyMiddleware(createEpicMiddleware(epics))
  )
}

