/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppRedux from './app/AppRedux';
import AppNormal from './app/AppNormal';

class ReactAppLanguage extends Component {
    render() {
        return (
            <AppNormal/>
        );
        /*
         // Ussage with redux app
         return (
           <AppRedux/>
         );
        */
    }
}
AppRegistry.registerComponent('ReactAppLanguage', () => ReactAppLanguage);
