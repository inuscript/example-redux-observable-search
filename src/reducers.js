import { LOAD_RESULT, CHANGE_INPUT } from './actions'
const result = (state = [], action ) => {
  switch(action.type){
  case LOAD_RESULT:
    return action.payload
  default:
    return state
  }
}


const word = (state = "", action ) => {
  switch(action.type){
  case CHANGE_INPUT:
    return action.payload
  default:
    return state
  }
}

export const reducers = { result, word }