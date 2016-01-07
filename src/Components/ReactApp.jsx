"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { Grid } from './Grid.jsx'

export class ReactApp extends React.Component {
    render() {
        return (
          <div>
            <Grid width="3" gridData={ this.props.gridData } />
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    gridData: state.get('gridData')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
