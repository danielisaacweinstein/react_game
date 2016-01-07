import React from 'react';

let style = {
  gridCell: {
    backgroundColor: '#eee',
    textAlign: 'center',
    width: '50px',
    height: '50px',
    margin: '5px',
    display: 'inline-block'
  },
  highlighted: {
    backgroundColor: 'red'
  }
}

class Cell extends React.Component {

    render() {
        const { highlighted, index } = this.props
        let cssClass = ''
        if (highlighted == true) {
          cssClass = 'highlighted'
        }

        return (
          <div className={cssClass} style={style.gridCell}>
            <p>{index}</p>
          </div>
        )
    }
}

export default Cell;
