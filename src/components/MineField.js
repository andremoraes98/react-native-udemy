import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Field from './Field';

export default props => {
  const rows = props.board.map((row, rowIndex) => {
    const columns = row.map((field, columnIndex) => {
      return <Field key={ columnIndex } { ...field } />
    })
    return <View key={ rowIndex }> { columns } </View>
  })
  return (
    <View style={ styles.container }> { rows } </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EEE'
  }
});
