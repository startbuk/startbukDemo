/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,Button, StyleSheet, Text, View} from 'react-native';
import ButtoSave from "./src/components/_ButtonSave";
import LoginContainer from './src/containers/LoginContainer'
import Styles from './src/styles/Styles';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
       name:"CLOSE"
    }
  }
  render() {
    return (
      <View>
        <LoginContainer />
        <ButtoSave titleName={"BUKASAJA"} colorMe={"red"}/>
        <ButtoSave titleName={"KEMBALI"} colorMe={"blue"}/>
        <Button title={this.state.name}/>
      </View>
    );
  }
}

