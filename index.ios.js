// index.ios.js -- ios code
// import library ot help create a component

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// create a component
const App = () => (
    <Header headerText="Albums" />
);


// render it to the device
AppRegistry.registerComponent('albums', () => App);
