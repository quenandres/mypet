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
  SafeAreaView,
  Alert,
  FlatList
} from 'react-native';

import Constants from 'expo-constants';


import bgImage from '../images/gatofondo.jpg';
import logo from '../images/gato_negro.png';
import Icon from 'react-native-vector-icons/Ionicons'


const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-gd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '51294a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-445571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-147671e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d90',
      title: 'Third Item',
    },

  ];

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
            <SafeAreaView style={styles.areaSegura}>
                <View style={styles.container}>
                    <View style={styles.menu}>
                        <FlatList
                            data={DATA}
                            horizontal={true}
                            renderItem={({ item }) => <Item title={item.title} />}
                            keyExtractor={item => item.id}
                        />
                    </View>                
                </View> 
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    areaSegura: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    container: {
        flex: 1,
        flexDirection: 'column-reverse',        
    },
    menu: {
        flexDirection: 'row'
    },
    list:{
        height:50,
        width:100,
        backgroundColor:'#ccc',
        borderTopLeftRadius:25,
        borderBottomRightRadius:25,
        textAlign: 'center',
        textAlignVertical: 'center',
    } 
});

function Item({ title }) {
    return (
      <View style={styles.title}>
        <Text style={styles.list}>{title}</Text>
      </View>
    );
  }

export default Login;