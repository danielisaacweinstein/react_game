import React from 'react';
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
    console.log(this.props.cellData.toJS())
    return this.props.cellData.toJS().map((cell, i) => {
      return (
        <Cell highlighted={cell.highlighted} key={i} index={i} />
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
