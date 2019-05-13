import React, {Component} from 'react';
import {Button,StyleSheet, Text, View} from 'react-native';
import Styles from '../styles/Styles';

export default class ButtonSave extends Component{
    constructor(props){
        super(props);
        this.state ={
            tittle:this.props.titleName
        }
    }
    handleClick= (text) => {
        this.setState({ tittle: "CHANGE" })
    }
    render(){
        return(
            <View>
                <Button  title={this.state.tittle} color={this.props.colorMe} onPress={this.handleClick}  />
            </View>
        )

    }
}