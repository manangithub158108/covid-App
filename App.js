import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import Splash2Screen from './screens/Splash2Screen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

var SwitchNavigator = createSwitchNavigator({
  SplashScreen : {screen : SplashScreen},
  Splash2Screen : {screen : Splash2Screen},
  LoginScreen : {screen : LoginScreen},
  SignupScreen : {screen : SignupScreen},
  HomeScreen : {screen : HomeScreen}
})

var AppContainer = createAppContainer(SwitchNavigator);