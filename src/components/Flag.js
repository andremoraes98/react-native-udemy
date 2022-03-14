import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Flag extends Component {
  render() {
    return (
      <View style={ styles.container } >
        <View style={ styles.flagPole }/>
        <View style={ styles.flag }/>
        <View style={ styles.base }/>
        <View style={ styles.masterBase }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagPole: {
    height: 14,
    width: 2,
    position: 'absolute',
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    backgroundColor: '#F22',
    height: 6,
    width: 7,
    marginLeft: 2,
  },
  base: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginTop: 11,
    marginLeft: 7,
  },
  masterBase: {
    position: 'absolute',
    height: 2,
    width: 12,
    backgroundColor: '#222',
    marginTop: 13,
    marginLeft: 4,
  }
})

export default Flag;
