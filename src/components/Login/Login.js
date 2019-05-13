import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Logo from './Logo';

export default class Login extends Component{
    state = {
        email: '',
        password: ''
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
     }
    render(){
        return(
            <View style = {styles.container}>
            <Logo />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>          
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               secureTextEntry={true} 
               onChangeText = {this.handlePassword}/>           
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Sign In </Text>
            </TouchableOpacity>
         </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
       paddingTop: 1
    },
    input: {
       margin: 15,
       height: 40,
       borderWidth: 1,
       borderColor:'grey'
    },
    submitButton: {
       backgroundColor: 'orange',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white',
       textAlign: 'center',
    }
 })