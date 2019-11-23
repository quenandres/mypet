import React from 'react';
import { View,Text,ImageBackground,StyleSheet,Dimensions,SafeAreaView } from 'react-native';

//import bgImage from '../imgs/perrogato2.jpg';
//import bgImage from '../imgs/lagartija.jpg';


const { width: WIDTH } = Dimensions.get('window')

import Menu from '../Menu';

const Productos = () => {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <Text>Productos</Text>
            <Menu />
        </SafeAreaView>
    
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

export default Productos;