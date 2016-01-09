import React from 'react'
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
    return this.props.cellData.toJS().map((cell, i) => {
      return (
        <Cell
         color={cell.color}
         index={i}
         onCellClick={(i) => this.props.onCellClick(i)}
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
