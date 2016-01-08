import React from 'react';

class Cell extends React.Component {

    render() {
        const { color, index } = this.props

        const style = {
          gridCell: {
            backgroundColor: color,
            textAlign: 'center',
            width: '50px',
            height: '50px',
            margin: '5px',
            display: 'inline-block'
          }
        }

        return (
          <div
            style={style.gridCell}
            onClick={this.props.onCellClick}>
            <p>{index}</p>
          </div>
        )
    }
}

export default Cell;
