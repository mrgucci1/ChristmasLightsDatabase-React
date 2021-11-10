import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {db, auth} from './Fire'
export default function App() {
  const[name, setName] = useState('');
  const getName = () => {
    db.collection('user').doc("01").get().then(doc => {
      setName(doc.data().name);
    })
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! {getName()}{name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
