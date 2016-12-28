import { actions, actionCreators } from './ducks'
import { combineEpics } from 'redux-observable'
import { searchApi } from './api'

const searchEpic = (action$) => (
  action$.ofType(actions.CHANGE_INPUT)
    .debounceTime(400)
    .mergeMap( ({ payload }) => searchApi(payload) )
    .map( result => actionCreators.loadResult(result) )
)

const sandboxDebounceEpic = (action$) => (
  action$.ofType(actions.CHANGE_INPUT)
    .map( input => {
      console.log(input)
      return input
    })
    .debounceTime(400)
    .map( input => {
      console.log("DEBOUNCED", input)
      return input
    })
    .mapTo({type: "SINK" }) // 同じactionそのまま返すと無限ループするので、テキトーなactionにして返す
)

export const epics = combineEpics(
  searchEpic,
  sandboxDebounceEpic
)