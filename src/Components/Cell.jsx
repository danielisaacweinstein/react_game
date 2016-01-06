import React from 'react';

let style = {
  gridCell: {
    backgroundColor: '#eee',
    width: '15px',
    height: '15px',
    margin: '5px',
    display: 'inline-block'
  }
}

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Cell';
    }
    render() {
        return <div style={style.gridCell}>{this.props.id}</div>;
    }
}

export default Cell;
