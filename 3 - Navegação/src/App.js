import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CenterText from './components/CenterText';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <CenterText>App</CenterText>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
