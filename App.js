import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './src/Routes';


class reactTutorialApp extends Component {
  render() {
     return (
        <Routes />
     )
  }
}
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)

