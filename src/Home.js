import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Alert
} from 'react-native';

//import bgImage from '../imgs/gato3.jpg';
//import bgImage from '../imgs/lagartija.jpg';
//import logo from '../imgs/gato_negro.png';
import Icon from 'react-native-vector-icons/Ionicons'

import Menu from './Menu';
import Productos from './Componentes/Productos';
import Tiendas from './Componentes/Tiendas';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

class Login extends Component {

    constructor() {
        super()
    }

    onLogin() {
        Alert.alert(
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
        )
    }

    aceptar() {
        console.log('Login aceptado');
    }

    cancelar() {
        console.log('Login cancelado');    
    }

render() {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <Tiendas />
            <Productos /> 
            <Menu />
        </SafeAreaView>
    
    );
  
    
    }
    
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: WIDTH,
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
    footer: {
        width: WIDTH,
        justifyContent: 'flex-start',
        marginTop: 5,
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