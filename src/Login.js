import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import { Actions } from 'react-native-router-flux';


import bgImage from '../imgs/lagartija.jpg';
import logo from '../imgs/gato_negro.png';
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

class Login extends Component {

    constructor() {
        super()
    }

    onLogin() {
        Actions.home();
        /* Alert.alert(
            'acceso',
            'Loagueado',
            [
                {
                    'text': 'Aceptar',
                    onPress: (this.aceptar.bind(this))
                },
                {
                    'text': 'Cancelar',
                    onPress: (this.cancelar.bind(this))
                },
            ]
        ) */
    }

    

    /* aceptar() {
        console.log('Login aceptado');
    }

    cancelar() {
        console.log('Login cancelado');    
    } */

render() {

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.header}>
                <Text style={styles.bienvenida}>Bienvenido a</Text>
                <Text style={styles.logoText}>My pets</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder={'Usuario'}
                    placeholderTextColor={'rgba(255,255,255,0.9)'}
                    underlineColorAndroid='transparent'
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(255,255,255,0.9)'}
                    underlineColorAndroid='transparent'
                />            
            </View>
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.onLogin(this)}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>          
        </ImageBackground>
    
    );
  
    
    }
    
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c3c3c3'
        },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 10,
        },
    logoText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.7,
        textAlign: 'center'
        },
    logo: {
        width: 120,
        height: 160,
        },
    inputContainer: {
        marginTop: 5,
        },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 24,
        paddingLeft: 45,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        marginHorizontal: 25,
        marginTop: 8
        },
    header: {
        width: WIDTH,
        justifyContent: 'flex-start',
        marginTop: 2,
        backgroundColor: 'rgba(26,232,131, 0.40)',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 5,
        },
    bienvenida: {
        fontSize: 25,
        color: '#fff',
        justifyContent: 'center',
        textAlign: 'center',    
        },
    btnLogin: {
        width: WIDTH - 55,
        height: 36,
        borderRadius: 25,
        backgroundColor: 'rgba(24,137,122, 0.70)',
        justifyContent: 'center',
        marginTop: 20,
        },
    text: {
        color:'#f0f1f1',
        fontSize: 25,
        textAlign: 'center',
        }     
});

export default Login;