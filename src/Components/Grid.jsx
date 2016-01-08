import React from 'react'
import { connect } from 'react-redux'
import { HIGHLIGHT_CELL } from '../actions.js'
import Cell from './Cell.jsx'

let style = {
  grid: {
    width: '180px',
    height: '180px',
    backgroundColor: 'black',
  }
}

export class Grid extends React.Component {

  getCells() {
    const { dispatch } = this.props

    return this.props.cellData.toJS().map((cell, i) => {
      return (
        <Cell
        color={cell.color}
        index={i}
        onCellClick={() => dispatch(HIGHLIGHT_CELL(this.props.cellData.toJS(), i))}
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
