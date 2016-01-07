import React from 'react';

let style = {
  gridCell: {
    backgroundColor: '#eee',
    textAlign: 'center',
    width: '50px',
    height: '50px',
    margin: '5px',
    display: 'inline-block'
  }
}

class Cell extends React.Component {

    render() {
        const { highlighted, index } = this.props
        console.log({index})

        return (
          <div style={style.gridCell}>
            <p>{index}</p>
          </div>
        )
    }
}

export default Cell;
