import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Stack from './Stack';

class index extends Component {
  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default index;
