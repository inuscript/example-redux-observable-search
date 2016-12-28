
import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './ducks'

const Main = ( { word, result, changeInput }) => {
  return <div>
    <input value={ word } onChange={ e => changeInput(e.target.value)} />
    <ul>
      {result.map( (r, i) => <li key={i}>{r}</li>)}
    </ul>
  </div>
}

export default connect(state => state, actionCreators)(Main)
