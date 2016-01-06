"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import ReactApp from './Components/ReactApp.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer.js'

let gridData = [
                {id: 0, highlighted: false},
                {id: 1, highlighted: false},
                {id: 2, highlighted: false},
                {id: 3, highlighted: false},
                {id: 4, highlighted: false},
                {id: 5, highlighted: false},
                {id: 6, highlighted: false},
                {id: 7, highlighted: false},
                {id: 8, highlighted: false}
              ]

const store = createStore(reducer)

store.dispatch({ type: 'SET_INITIAL_STATE',
                 state: gridData })

ReactDOM.render(
  <Provider store={store}>
    <ReactApp />
  </Provider>,
  document.getElementById('react')
)