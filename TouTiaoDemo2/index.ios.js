/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    NavigatorIOS
} from 'react-native';

var LoginView = require('./TouTiaoLoginView');


var TouTiaoDemo =  React.createClass({
    render() {
        return (

            <NavigatorIOS
                ref='nav'
                initialRoute={{
                    component: LoginView,
                    title: '登录',
                }}
                style={{flex: 1}}
            />
        );
    }
});
AppRegistry.registerComponent('TouTiaoDemo', () => TouTiaoDemo);
