import { Map } from 'immutable'

function setInitialState(state, newData) {
  let numOfCells = Math.pow(newData.gridWidth, 2)
  for (var i = 0; i < numOfCells; i++) {
    newData.cellData.push({"highlighted": false})
  }
  return state.merge(newData)
}

function reducer(state = Map(), action) {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setInitialState(state, action.data)
  }
  return state
}

export default reducer
