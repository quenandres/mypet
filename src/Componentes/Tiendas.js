import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const Tiendas = () => {
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
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        },
        {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        },
      ];

    return(
        <View style={styles.container}>
             <FlatList
                data={DATA}
                renderItem={({ item }) => <Tienda />}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    );
}

function Tienda({ title }) {
    return (
      <View style={styles.store}>
        <Text>Nombre tienda</Text>
        <View style={styles.logo}></View>
        <Text style={styles.descripcion}>Descripcion de la tienda</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        height:250,
        backgroundColor:'#303030',
        marginTop:28,
        width:'90%',
        justifyContent:'center',        
    },
    store: {
        marginTop:20,
        backgroundColor:'#ccc',
        padding:5,
        height:200,
        width: 100,
        marginLeft: 3,
    },
    logo: {
        width:'95%',
        justifyContent:'center',
        borderRadius: 5,
        height:90,
        backgroundColor:'#006957',
    },
    descripcion: {
        width:'95%',
        color: '#fff',
        height:'auto',
    }
});

export default Tiendas;