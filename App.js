import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions
} from 'react-native';

import bgImage from './images/garfield3.jpg';
import logo from './images/vuelogo.png';
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

export default function App() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.logoText}>My pets</Text>
        </View>

        <View>
          <Icon name ={'ios-person-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
          style={styles.inputIcon}/>
            <TextInput 
              style={styles.input}
              placeholder={'Usuario'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
            />
        </View>
    </ImageBackground>
  );
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
  },
  logoText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  logo: {
    width: 120,
    height: 120,
  },
  input: {
    width: WIDTH - 55,
    height: 35,
    borderRadius: 25,
    fontSize: 25,
    paddingLeft: 45,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37
  }
});
