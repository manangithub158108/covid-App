import React, {Component} from 'react';
import {ImageBackground, Text, View, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class SignupScreen extends Component{

    state = {email : '', password : '', age : 0, username : ''}

    goToLoginScreen = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    goToSplash2Screen = () => {
        this.props.navigation.navigate('Splash2Screen');
    }

    SignupFunction = async() => {
        if(this.state.age && this.state.username && this.state.email && this.state.password){
            firestore.collection('Covid shield App').doc('User').update({
                "Age" : this.state.age,
                'Username' : this.state.username
            })
            console.log('User ag an name stored in database');
        }
    }   

  render(){
    return(
      <View>

          <ImageBackground source = {require('../Images/bg.jpg')}
          style = {{width : '100%', height : '100%', marginTop : 30}}>
              <Text style = {style.appHeading}> SignupScreen </Text>

              <Image source = {require('../Images/corona13.png')}
                style = {{
                    width : 200, height : 200, marginTop : 10, marginBottom : 20, alignSelf : 'center'
                }}></Image>

                <TextInput placeholder = 'Enter email'  placeholderTextColor = 'lightblue'
                onChangeText = {(text) => {
                    this.setState({
                        email : text
                    })
                }} style = {style.TextInput}></TextInput>

                <TextInput placeholder = 'Enter password' placeholderTextColor = 'lightblue' secureTextEntry = {true}
                onChangeText = {(text) => {
                    this.setState({
                        password : text
                    })
                }} style = {style.TextInput}></TextInput>

                <TextInput placeholder = 'Enter username' placeholderTextColor = 'lightblue'
                onChangeText = {(text) => {
                    this.setState({
                        username : text
                    })
                }} style = {style.TextInput}></TextInput>

                <TextInput placeholder = 'Enter age'  placeholderTextColor = 'lightblue'
                onChangeText = {(text) => {
                    this.setState({
                        age : text
                    })
                }} style = {style.TextInput}></TextInput>
                <TouchableOpacity onPress = {() => {
                    this.SignupFunction();
                }}><Text style = {style.button}> Signup </Text></TouchableOpacity>

                <TouchableOpacity onPress = {() => {
                  this.props.navigation.navigate('LoginScreen');
                }}>
                <Image source = {require('../Images/arrow.png')}
                style = {{
                  width : 75, height : 75, alignSelf : 'flex-end'
                }}></Image></TouchableOpacity>

                <TouchableOpacity onPress = {() => {
                  this.props.navigation.navigate('Splash2Screen');
                }}>
                <Image source = {require('../Images/Arrow1.png')}
                style = {{
                  width : 75, height : 75, marginTop : -75, alignSelf : 'flex-start'
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
        fontSize : 30,
        height : 55,
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
        alignSelf : 'center'
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
        alignSelf : 'center',
        marginBottom : 80
    },
})