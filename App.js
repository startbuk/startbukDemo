import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import MainMenu from './src/containers/MainMenu';
import Login from './src/components/Login/Login'

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: MainMenu,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


