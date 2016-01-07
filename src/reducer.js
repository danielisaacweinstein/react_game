import { Map } from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

function reducer(state = Map(), action) {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setState(state, action.data)
    case 'HIGHLIGHT':
      return setState(state, action.state)
  }
  return state
}

export default reducer