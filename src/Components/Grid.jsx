
import React from 'react';
// import Cell from './Cell.jsx'

let style = {
  grid: {
    width: '75px',
    height: '75px',
    backgroundColor: 'black',
  }
}

export class Grid extends React.Component {
    render() {
      console.log(this.props.gridData.get('highlighted'))
      return (
        <div></div>
      )
    }
}
