import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginContainer from '../containers/LoginContainer';
import MainMenu from '../containers/MainMenu';

const RootStack = createStackNavigator(
    {
      Login: {
        screen: LoginContainer,
      },
      Home: {
        screen: MainMenu,
      },
    },
    {
      initialRouteName: 'Login',
    }
  );
  
  export const AppContainer = createAppContainer(RootStack);
  