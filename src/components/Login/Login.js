import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity, Alert, TextInput, StyleSheet } from 'react-native';
import { wNavigation } from 'react-navigation';
import Logo from './Logo';
import Api from '../../api/Api'

export default class Login extends Component {
   constructor(props) {
      super(props);
   }
   static navigationOptions = {
      title: "LOGIN"
   }
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
      let param = {
         username: email,
         password: pass
      }
      this.auth(param,function(_result){
        if(_result == 'true') {
            this.props.navigation.navigate('Home');
         } else {
            Alert.alert(
               'You username or password not found !'
            )
         }
      });
   }
   auth (param,result){
      Api.doPost('/user/login/', param, function (response) {
         console.log(response);
         if (response.code == 200) {
            result('true');
         } else {
            result('false');
         }
      });
   }
   render() {

      return (
         <View style={styles.container}>
            <Logo />
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Email"
               placeholderTextColor="grey"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Password"
               placeholderTextColor="grey"
               autoCapitalize="none"
               secureTextEntry={true}
               onChangeText={this.handlePassword} />
            <TouchableOpacity
               style={styles.submitButton}
               onPress={
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style={styles.submitButtonText}> Sign In </Text>
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
      borderColor: 'grey'
   },
   submitButton: {
      backgroundColor: 'orange',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText: {
      color: 'white',
      textAlign: 'center',
   }
})