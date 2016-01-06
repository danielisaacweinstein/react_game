"use strict"

import React from 'react'
import Grid from './Grid.jsx'
import { Provider } from 'react-redux'

class ReactApp extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ReactApp';
    }
    render() {
        return (
          <Grid width="3" />
        );
    }
}

// function mapStateToProps(state) {
//   return {
//     highlighted: state.highlight
//   }
// })

export default connect()(ReactApp);
