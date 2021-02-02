import React, {Component} from 'react';
import {ImageBackground, Text, View, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import firebase from '@firebase/app';

export default class LoginScreen extends Component{

    state = {email : '', password : ''}

    loginFunction = async() => {
        if(this.state.email && this.state.password){
            var login = await firebase.auth().signInWithEmailAndPassword(
                this.state.email, this.state.password
            )
            if(login){
                alert('It is working!!')
            }
        }
    }

    goToSplash2Screen = () => {
        this.props.navigation.navigate('Splash2Screen');
    }

    goToHomeScreen = () => {
        this.props.navigation.navigate('HomeScreen');
    }

  render(){
    return(
      <View>

          <ImageBackground source = {require('../Images/bg1.jpg')}
          style = {{width : '100%', height : '100%', marginTop : 30}}>
              <Text style = {style.appHeading}> LoginScreen </Text>
              <Image source = {require('../Images/corona2.png')}
                style = {{
                    width : 200, height : 200, marginTop : 30, marginBottom : 30, alignSelf : 'center'
                }}></Image>
                <TextInput placeholder = 'Enter email'  placeholderTextColor = "lightblue" 
                onChangeText = {(text) => {
                    this.setState({
                        email : text
                    })
                }} style = {style.TextInput}></TextInput>
                <TextInput placeholder = 'Enter password' placeholderTextColor = "lightblue" secureTextEntry = {true}
                onChangeText = {(text) => {
                    this.setState({
                        password : text
                    })
                }} style = {style.TextInput}></TextInput>
                <TouchableOpacity onPress = {() => {
                    this.loginFunction();
                }}><Text style = {style.button}> Login </Text></TouchableOpacity>

                <TouchableOpacity onPress = {() => {
                  this.goToHomeScreen();
                }}>
                <Image source = {require('../Images/arrow.png')}
                style = {{
                  width : 75, height : 75, alignSelf : 'flex-end', marginTop : 200
                }}></Image></TouchableOpacity>

                <TouchableOpacity onPress = {() => {
                  this.goToSplash2Screen();
                }}>
                <Image source = {require('../Images/Arrow1.png')}
                style = {{
                  width : 75, height : 75, alignSelf : 'flex-start', marginTop : -70
                }}></Image></TouchableOpacity>

          </ImageBackground>
      </View>
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