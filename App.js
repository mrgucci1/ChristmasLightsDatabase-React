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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F703A',
    width: '100',
    height: '100',
    flexDirection: 'column'
  },
  topNav: {
    backgroundColor: '#4F703A',
    width: '100',
    height: '20'
  },
  logo: {
    backgroundColor: '#4F703A',
    width: '100',
    height: '20',
    border: '1px red solid'
  },
});
