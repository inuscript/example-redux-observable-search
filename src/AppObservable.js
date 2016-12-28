import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './store-observable'
import Container from './Container'

export default class App extends React.Component{
  constructor(){
    super()
    this.store = configureStore()
  }
  render(){
    return (
      <Provider store={this.store} >
        <Container />
      </Provider>
    )
  }
}