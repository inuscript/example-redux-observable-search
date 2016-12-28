import React from 'react'
import { addListener } from './logger.js'

export default class Monitor extends React.Component {
  constructor(){
    super()
    this.state = {
      logs: []
    }
    addListener( (logs) => {
      this.setState( { logs: logs.concat().reverse() })
    })
  }
  render(){
    return <div>
      {this.state.logs.map( (log, i) => {
        return <div key={i}>{log}</div>
      })}
    </div>
  }
}