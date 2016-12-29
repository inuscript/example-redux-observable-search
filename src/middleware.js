// raw middleware
import { CHANGE_INPUT, loadResult } from './actions'
import { searchApi } from './api'

// 普通はあまりmiddlewareに直接実装を書く事はしないが、今回は説明用ということでこうする
export const searchMiddleware = store => next => action => {
  if(action.type === CHANGE_INPUT){
    searchApi(action.payload)
      .then( result => {
        store.dispatch(loadResult(result))
      })
  }
  return next(action)
}