import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Field from './src/components/Field';
import params from './src/params';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Campo Minado!</Text>
      <Text style={styles.instructions}>Tamanho da grade: { params.getRowsAmount() }x{ params.getColumnsAmount() }</Text>
      <Field />
      <Field opened />
      <Field opened nearMines={ 1 } />
      <Field opened nearMines={ 2 } />
      <Field opened nearMines={ 3 } />
      <Field opened nearMines={ 4 } />
      <Field opened nearMines={ 7 } />
      <Field opened mined />
      <Field opened mined exploded />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
});
