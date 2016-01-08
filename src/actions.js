export const HIGHLIGHT_CELL = (cellData, cellId) => {
  let currentState = cellData
  currentState[cellId].color = '#00aeef'
  return {
    type: 'HIGHLIGHT_CELL',
    data: {
      cellData: currentState
    }
  }
}
