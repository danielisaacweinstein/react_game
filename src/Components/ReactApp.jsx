"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { Grid } from './Grid.jsx'
import { highlightCell } from '../actions.js'

export class ReactApp extends React.Component {
  render() {
    const { dispatch, gridWidth, cellData } = this.props
    return ( <div>
               <Grid
                 width={ this.props.gridWidth }
                 cellData={ this.props.cellData }
                 onCellClick={ (i) => { dispatch(highlightCell(i)) } }
               />
             </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gridWidth: state.get('gridWidth'),
    cellData: state.get('cellData')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
