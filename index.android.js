import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import SensorExample from './app/SensorExample'

class sensorsApp extends Component {
  render() {
    return (
      <SensorExample />
    )
  }
}

AppRegistry.registerComponent('sensorsApp', () => sensorsApp)
