// Action creators

export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE',
    data: {
      gridWidth: 3,
      cellData: []
    }
  }
}

export function highlightCell(index) {
  return {
    type: 'HIGHLIGHT_CELL',
    data: {
      id: index
    }
  }
}
