import 'rxjs'

import { CHANGE_INPUT, loadResult } from './actions'
import { combineEpics } from 'redux-observable'
import { searchApi } from './api'

const searchEpic = (action$) => (
  action$.ofType(CHANGE_INPUT)
    .map( ({payload}) => payload )
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap( (payload) => searchApi(payload) )
    .map( result => loadResult(result) )
)

export const epics = combineEpics(
  searchEpic
)