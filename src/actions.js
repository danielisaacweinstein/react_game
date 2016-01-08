export const HIGHLIGHT_CELL = (cellData, cellId) => {
  cellData[cellId].color = '#00aeef'
  return {
    type: 'HIGHLIGHT_CELL',
    data: {
      cellData: cellData
    }
  }
}

// left arrow	37
// up arrow	38
// right arrow	39
// down arrow	40

export const MOVE_CELLS = (cellData, keyCode) => {
  let positionChange = 0
  switch (keyCode) {
    case 38: // up arrow
      positionChange = 3
      break
    case 40: // down arrow
      positionChange = -3
      break
    case 39: // right arrow
      positionChange = -1
      break
    case 37: // left arrow
      positionChange = 1
      break
  }

  for (var i = 0; i < 9; i++) {
    cellData[i].position += positionChange
  }

  return {
    type: 'MOVE_CELLS',
    data: {
      cellData: cellData
    }
  }
}
