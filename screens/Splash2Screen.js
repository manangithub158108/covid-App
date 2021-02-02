import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Splash2Screen extends Component{
  render(){
    return(
      <View style = {{backgroundColor : '#302387', marginTop : 30}}>
          <Text style = {style.appHeading}> Welcome my dear user!!</Text>
          <Text style = {style.text}> This is a covid shield app which will be able to text you and give results that if you are 
              covid positive or not and it will alse tell about the places where the vaccination is taking 
              place
          </Text>

          <TouchableOpacity onPress = {() => {
              this.props.navigation.navigate('LoginScreen');
          }}><Text style = {style.Button}> Login </Text></TouchableOpacity>

          <TouchableOpacity onPress = {() => {
              this.props.navigation.navigate('SignupScreen');
          }}><Text style = {style.Button}> Signup </Text></TouchableOpacity>

          <Image source = {require('../Images/corona.png')}
          style = {{
              width : 200,
              height : 220,
              alignSelf : 'center',
              marginTop : 30,
              marginBottom : 70
          }}></Image>

      </View>
    )
  }
}

var style = StyleSheet.create({
    Button : {
        marginTop : 10, 
        marginBottom : 10, 
        color : '#ff5e78',
        backgroundColor : '#845ec2',
        borderRadius : 40,
        textAlign : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        height : 55, 
        width : '60%',
        fontSize : 30,
        fontFamily : 'bradley hand',
        textAlignVertical : 'center'
    },

    text : {
        display : 'flex',
        color : '#fffdaf',
        fontSize : 30,
        fontFamily : 'chalkboard SE',
        textAlign : 'center',
        marginBottom : 30
    },

    appHeading : {
        marginBottom : 30, 
        color : '#ff5e78',
        backgroundColor : '#845ec2',
        textAlign : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        height : 50, 
        width : '100%',
        fontSize : 30,
        fontFamily : 'bradley hand',
    }
})