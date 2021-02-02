import React, {Component} from 'react';
import {ImageBackground, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class SplashScreen extends Component{
  render(){
    return(
      <View>
          <ImageBackground source = {require('../Images/bg2.jpg')} 
          style = {{
          width : 470, 
          height : '100%', 
          marginTop : 25,
          alignSelf : 'center'
          }}>
            <Text style = {style.text1}> Please click below to start </Text>
              <TouchableOpacity onPress = {() => {
                  this.props.navigation.navigate('Splash2Screen')
              }}><Text style = {style.text}> Go </Text></TouchableOpacity>
          </ImageBackground>
      </View>
    )
  }
}

var style = StyleSheet.create({
    text : {
        marginTop : 10, 
        marginBottom : 30, 
        color : '#ff5e78',
        backgroundColor : '#845ec2',
        borderRadius : 40,
        textAlign : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        height : 50, 
        width : '30%',
        fontSize : 30,
        fontFamily : 'bradley hand'
    },

    text1 : {
      marginTop : 30, 
      marginBottom : 10, 
      color : '#ff5e78',
      textAlign : 'center',
      justifyContent : 'center',
      alignSelf : 'center',
      fontSize : 30,
  }
})