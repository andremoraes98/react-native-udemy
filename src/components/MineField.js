import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, SafeAreaViewComponent } from 'react-native';
import Field from './Field';

export default props => {
  const rows = props.board.map((row, rowIndex) => {
    const columns = row.map((column, columnIndex) => {
      return <Field { ...column } key={columnIndex} />
    });
    return <View key={ rowIndex } style={styles.marginLeft}>{columns}</View>
  });
  return <View style={ styles.container }>{rows}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    marginTop: 60,
  },
  marginLeft: {
    flexDirection: 'row'
  }
});
