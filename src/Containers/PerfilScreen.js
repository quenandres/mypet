import React from 'react';
import { View,Text,ImageBackground,StyleSheet,Dimensions,SafeAreaView } from 'react-native';

//import bgImage from '../imgs/perro1.jpg';
//import bgImage from '../imgs/lagartija.jpg';

const { width: WIDTH } = Dimensions.get('window')

import Menu from '../Menu';

const Perfil = () => {
    return (
        <View style={styles.backgroundContainer}>
            <Text>Perfil</Text>
            <Menu />
        </View>
    
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