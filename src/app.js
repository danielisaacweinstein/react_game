"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.js'
import { AppContainer } from './Components/ReactApp.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { setInitialState } from './actions.js'

const store = createStore(reducer)

store.dispatch(setInitialState())

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('react')
)
