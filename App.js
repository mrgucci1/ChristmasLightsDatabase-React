import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {db, auth} from './Fire'
export default function App() {
  const[name, setName] = useState('');

  useEffect(() => {
    db.collection('user').doc("01").get().then(doc => {
      setName(doc.data().name);
    })
  });
  
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

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%'
  },
  topNav: {
    backgroundColor: '#4F703A',
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
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20 
  },
  main: {
    backgroundColor: 'blue',
    width: '100%',
    height: '80%',
  }
  
});
