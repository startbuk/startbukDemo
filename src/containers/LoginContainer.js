import React, {Component} from 'react';
import {View} from 'react-native';
import { wNavigation } from 'react-navigation';
import Login from '../components/Login/Login'

export default class LoginContainer extends Component{
    render(){
        return(
        <View >
            <Login />
        </View>
        )

    }
}