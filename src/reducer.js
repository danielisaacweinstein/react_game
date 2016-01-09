import { Map } from 'immutable'

function setInitialState(state, newData) {
  let numOfCells = Math.pow(newData.gridWidth, 2)
  for (var i = 0; i < numOfCells; i++) {
    newData.cellData.push({"color": '#eee'})
  }
  return state.merge(newData)
}

function highlightCell(state, newData) {
  return state.updateIn(['cellData', newData.id, 'color'], () => '#00aeef')
}

function reducer(state = Map(), action) {
  console.log(action.type)
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setInitialState(state, action.data)
    case 'HIGHLIGHT_CELL':
      return highlightCell(state, action.data)
  }
  return state
}

export default reducer
