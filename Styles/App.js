import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class Styles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.DefaultText}>Hello</Text>
        <Text style = {styles.DefaultText}>My name is</Text>
        <Text style = {styles.DefaultText}>WHAaT?</Text>
        <Text style = {styles.DefaultText}>Chika-Chika</Text>
        <Text style = {styles.efaultText}>Slimshady</Text>
        <Text>Table</Text>
        <Text style = {[styles.Table, styles.DefaultText]}>Mississauga</Text>
        <Text style = {[styles.Table, styles.DefaultText]}>Ottawa</Text>
        <Text style = {[styles.Table, styles.DefaultText]}>Singapore</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  DefaultText: {
    fontSize: 22,
    color: 'black'
  },
  Table:{
    fontWeight: 'bold',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    margin:5
  }
});

AppRegistry.registerComponent('Styles', () => Styles);
