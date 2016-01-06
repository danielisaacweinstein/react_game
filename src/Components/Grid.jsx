import React from 'react';
import Cell from './Cell.jsx'

let gridData = [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},
                {id: 6},
                {id: 7},
                {id: 8}
              ]


let style = {
  grid: {
    width: '75px',
    height: '75px',
    backgroundColor: 'black',
  }
}

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Grid';
    }
    render() {
      let cellNodes = gridData.map((cell, index) => {
        return (<Cell id={cell.id} key={index} />)
      })

      return (
        <div style={style.grid}>
          {cellNodes}
        </div>
      )
    }
}

export default Grid;
