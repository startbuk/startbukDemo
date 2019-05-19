import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Main from '../components/Main/Main';

export default class MainMenu extends Component {
    static navigationOptions = {
        title: "Home Screen"
    }
    render() {
        return (
            <View>
               <Main />
            </View>
        )
    }
}