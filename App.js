import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {db, auth} from './Fire'
import { useFonts, Lora_400Regular  } from '@expo-google-fonts/lora';
import {  AbrilFatface_400Regular  } from '@expo-google-fonts/abril-fatface';
export default function App() {
  const[name, setName] = useState('');
  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    AbrilFatface_400Regular
  });
  useEffect(() => {
    db.collection('user').doc("01").get().then(doc => {
      setName(doc.data().name);
    })
  });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Image 
          style={styles.logo}
          source={require('./images/logo_app.png')}
        />
        <Text style={styles.headerText}>Christmas Lights Database</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.filterView}></View>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%'
  },
  topNav: {
    backgroundColor: '#044f35',
    width: '100%',
    height: '20%',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  logo: {
    backgroundColor: '#4F703A',
    width: 100,
    height: 100,
    marginLeft: 10
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'AbrilFatface_400Regular', 
    
  },
  main: {
    backgroundColor: 'blue',
    width: '100%',
    height: '80%',
  },
  filterView: {
    backgroundColor: 'red',
    width: '100%',
    height: '10%',
  }
  
});
