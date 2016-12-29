// raw middleware

import { actions, actionCreators } from './actions'
import { searchApi } from './api'

export const searchMiddleware = store => next => action => {
  if(action.type === actions.CHANGE_INPUT){
    searchApi(action.payload)
      .then( result => {
        store.dispatch(actionCreators.loadResult(result))
      })
  }
  return next(action)
}