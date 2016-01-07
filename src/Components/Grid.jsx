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
    currentState[i].highlighted = true
    return { type: 'HIGHLIGHT_CELL', data: this.props }
  }

  getCells() {
    const { dispatch } = this.props

    return this.props.cellData.toJS().map((cell, i) => {
      return (
        <Cell
        highlighted={cell.highlighted}
        index={i}
        onClick={dispatch(this.highlightCell(i))}
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
