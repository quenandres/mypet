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

import { Actions } from 'react-native-router-flux';

import bgImage from '../imgs/gatofondo.jpg';
import logo from '../imgs/gato_negro.png';
import Icon from 'react-native-vector-icons/Ionicons'


const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-35b5312d28ba',
      title: 'Home',
      page: 'home',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Productos',
      page: 'productos',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Tiendas',
      page: 'tiendas',
    },
    {
      id: '3ac68afc-c605-48d3-23f1-fbd91aa97f63',
      title: 'Perfil',
      page: 'perfil',
    },
    {
      id: '3ac68afc-c605-48d3-23f1-fbd91aa97f63',
      title: 'Compra',
      page: 'compra',
    },
  ];

class Login extends Component {

    constructor() {
        super()
    }  

    home() {      
      Actions.home();
    }

    productos() {      
      Actions.productos();
    }

    tiendas() {      
      Actions.tiendas();
    }

    perfil() {      
      Actions.perfil();
    }

    compra() {      
      Actions.compra();
    }

    render() {
        return (
            <SafeAreaView style={styles.areaSegura}>
                {/* <View style={styles.container}>
                    <View style={styles.menu}>
                        <FlatList
                            data={DATA}
                            horizontal={true}
                            renderItem={({ item }) => <Item title={item.title} />}
                            keyExtractor={item => item.id}
                            onPress={() => this.item.page()}
                        />
                    </View>                
                </View>  */}

                <View style={styles.container}>
                    <View style={styles.menu}>
                        <Text onPress={() => this.home()} style={styles.list}>Home</Text>
                        <Text onPress={() => this.productos()} style={styles.list}>Productos</Text>
                        <Text onPress={() => this.tiendas()} style={styles.list}>Tiendas</Text>
                        <Text onPress={() => this.perfil()} style={styles.list}>Perfil</Text>
                        <Text onPress={() => this.compra()} style={styles.list}>Compra</Text>
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
        width:80,
        backgroundColor:'#009999',
        borderTopLeftRadius:0,
        borderBottomRightRadius:0,
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