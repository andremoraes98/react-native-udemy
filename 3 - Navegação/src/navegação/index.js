import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Drawer from './Drawer';

class index extends Component {
  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <NavigationContainer>
          <Drawer />
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
