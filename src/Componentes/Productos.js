import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';


const Productos = () => {
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
      ];

    return(
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Producto />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
function Producto({ title }) {
    return (
      <View style={styles.containerProducto}>
        <View style={styles.logo}></View>
        <View style={styles.containerDescripcion}>
          <Text>Nombre producto</Text>
          <Text style={styles.descripcion}>Descripcion de la tienda</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        height:350,
        backgroundColor:'#303030',
        marginTop:8,
        width:'90%',
        justifyContent:'center',        
    },
    containerProducto: {
        marginTop:20,
        backgroundColor:'#ccc',
        padding:5,
        height:200,
        width: '100%',
        marginLeft: 3,
    },
    containerDescripcion: {
      right: 0,
      width:'50%',
      height:100,
      backgroundColor:'#e0e',
    },
    logo: {
        width:'25%',
        justifyContent:'flex-start',
        borderRadius: 5,
        height:90,
        backgroundColor:'#006957',
    },
    precio: {
        width:'95%',
        color: '#fff',
        height:'auto',
    }
});

export default Productos;