import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , Button} from 'react-native';
import { useState } from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>socorro!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#def',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
