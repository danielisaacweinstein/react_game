import React from 'react'
import { connect } from 'react-redux'
import Cell from './Cell.jsx'

let style = {
  grid: {
    width: '180px',
    height: '180px',
    backgroundColor: 'black',
  }
}

export class Grid extends React.Component {
  highlightCell(i) {
    let currentState = this.props.cellData.toJS()
    currentState[i].color = '#00aeef'
    console.log(currentState)
    return {
      type: 'HIGHLIGHT_CELL',
      data: {
        cellData: currentState
      }
    }
  }

  getCells() {
    const { dispatch } = this.props

    return this.props.cellData.toJS().map((cell, i) => {
      return (
        <Cell
        color={cell.color}
        index={i}
        onCellClick={() => dispatch(this.highlightCell(i))}
        key={i} />
      )
    })
  }

  render() {
    return (
      <div style={style.grid}>
        {this.getCells()}
      </div>
    )
  }
}

export default connect()(Grid)
