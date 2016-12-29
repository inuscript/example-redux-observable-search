import Rx from 'rxjs'
import { actions, actionCreators } from './ducks'
import { combineEpics } from 'redux-observable'
import { searchApi } from './api'

const searchEpic = (action$) => (
  action$.ofType(actions.CHANGE_INPUT)
    .map( ({payload}) => payload )
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap( (payload) => searchApi(payload) )
    .map( result => actionCreators.loadResult(result) )
)

const sandboxDebounceEpic = (action$) => (
  action$.ofType(actions.CHANGE_INPUT)
    .map( ({payload}) => payload )
    .map( (payload) => {
      console.log("START SMART", payload)
      return payload
    })
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap( input => {
      console.log("END SMART", input)
      // return input
      // return {type: "SINK" }
      return Rx.Observable.of(input)
    })
    .mapTo({type: "SINK" }) // 同じactionそのまま返すと無限ループするので、テキトーなactionにして返す
)

export const epics = combineEpics(
  searchEpic,
  sandboxDebounceEpic
)