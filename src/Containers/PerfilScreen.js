import React from 'react';
import { View,Text,ImageBackground,StyleSheet,Dimensions } from 'react-native';

import bgImage from '../images/perro1.jpg';

const { width: WIDTH } = Dimensions.get('window')

import Menu from '../Menu';

const Perfil = () => {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <Text>Perfil</Text>
            <Menu />
        </ImageBackground>
    
    );
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
});

export default Perfil;