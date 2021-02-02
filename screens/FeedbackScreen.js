import React, {Component} from 'react';
import {ImageBackground, Text, View, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import firebase from '@firebase/app';

export default class LoginScreen extends Component{

  render(){
    return(
      <View></View>
    )
  }
}

var style = StyleSheet.create({
    appHeading : {
        display : 'flex',
        color : '#ffcc29',
        backgroundColor : '#350b40',
        fontSize : 35,
        height : 60,
        width : '100%',
        textAlign : 'center',
        justifyContent : 'center',
        fontFamily : 'bradley hand'
    },

    TextInput : {
        display : 'flex',
        color : '#ffcc29',
        backgroundColor : '#350b40',
        fontSize : 20,
        height : 50,
        width : '80%',
        textAlign : 'center',
        justifyContent : 'center',
        fontFamily : 'bradley hand',
        borderTopRightRadius : 40,
        borderBottomLeftRadius : 40,
        marginTop : 30,
        alignSelf : 'center',
    },

    button : {
        display : 'flex',
        color : '#e9b0df',
        backgroundColor : '#295939',
        fontSize : 30,
        height : 50,
        width : '50%',
        textAlign : 'center',
        justifyContent : 'center',
        fontFamily : 'bradley hand',
        borderRadius : 20,
        marginTop : 30,
        alignSelf : 'center'
    },
})