import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ScreenA from './views/ScreenA';
import ScreenB from './views/ScreenB';
import ScreenC from './views/ScreenC';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <ScreenA />
        <ScreenB />
        <ScreenC />
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
