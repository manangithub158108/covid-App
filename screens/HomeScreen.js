import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class HomeScreen extends Component{

  
  render(){
    return(
      <View style = {{backgroundColor : "#111d5e", marginTop : 30, alignItems : 'center'}}>
        <Text style = {style.appHeading}> HomeScreen </Text>
        <Text style = {style.text}> In this app we are giving you two options either to select the option of covid test to 
          text yourselves or for selecting the option of Vaccination tracker which will track the no. 
          of vaccination centres
        </Text>
        <TouchableOpacity onPress = {() => {
          this.props.navigation.navigate();
        }} style = {style.button}><Text> Corona Testing app </Text></TouchableOpacity>
        <TouchableOpacity style = {
          style.button
        }><Text> Vaccination tracker </Text></TouchableOpacity>
        
        <Image source = {require('../Images/corona10.png')}
        style = {{
          width : 200, height : 200,
          alignSelf : 'center', marginTop : 30
        }}></Image>

<TouchableOpacity onPress = {() => {
                this.props.navigation.navigate('SignupScreen');
          }}>
                <Image source = {require('../Images/Arrow1.png')}
                style = {{
                  width : 75, height : 75, alignSelf : 'flex-start'
                }}></Image></TouchableOpacity>
      </View>
    )
  }
}

var style = StyleSheet.create({
  appHeading : {
      display : 'flex',
      color : '#c0e218',
      backgroundColor : '#c70039',
      fontSize : 35,
      height : 60,
      width : '100%',
      textAlign : 'center',
      justifyContent : 'center',
      marginBottom : 40
  },

  button : {
      display : 'flex',
      color : '#00af91',
      backgroundColor : '#00af91',
      fontSize : 30,
      height : 50,
      width : '50%',
      textAlign : 'center',
      justifyContent : 'center',
      borderRadius : 20,
      marginTop : 30,
      alignSelf : 'center',
      justifyContent : 'center'

  },

  text : {
    display : 'flex',
    color : '#ff7b54',
    fontSize : 30,
    textAlign : 'center',
    marginBottom : 30
},

})