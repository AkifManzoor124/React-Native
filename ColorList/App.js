import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  
  constructor(){
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor){
    this.setState({backgroundColor})
  }
  
  render(){
    const { backgroundColor} = this.state
    return (
      //This allows us to keep the styles.container
      //Allows us to overwrite the background colour of the app
      <View style={[styles.container,{backgroundColor}]}>
        <Text style = {styles.button}
          onPress={() => this.changeColor('green')}>Green</Text>
        <Text style = {styles.button}
          onPress={() => this.changeColor('pink')}>Pink</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 30,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
});
