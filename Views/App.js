//https://reactnative.dev/docs/props

//ES6 syntax
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

//ES6 syntax
//Create class Views which extends Components
export default class Views extends Component {
  //react component needs atleast a render method
  //render will return some code
  render() {
    return (
      <View>
        <Text>Apple</Text>
        <Text>Orange</Text>
        <Text>Squirrel</Text>
      </View>
    );
  }
}

//First component the user will see
AppRegistry.registerComponent('Views', () => Views);
