/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var LoginView = require('./TouTiaoLoginView');

class TouTiaoDemo extends Component {
  render() {
    return (
     <LoginView></LoginView>
    );
  }
}

AppRegistry.registerComponent('TouTiaoDemo', () => TouTiaoDemo);
