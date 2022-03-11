import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import params from '../params';

class Field extends Component {
  render() {
    const { mined, opened, nearMines } = this.props;
    const styleField = [styles.field];
    let color = null;

    opened ? styleField.push(styles.opened) : null;

    ( styleField.length === 1 ) ? styleField.push(styles.regular) : null;

    if (nearMines > 0) {
      if (nearMines === 1 ) color = '#2A28D7' 
      if (nearMines === 2 ) color = '#2B520F' 
      if (nearMines > 2 && nearMines < 6 ) color = '#F9060A'
      if (nearMines >= 6 ) color = '#F221A9' 
    }

    return (
      <View style={ styleField }>
        { !mined && opened && nearMines > 0
            ? (
              <Text style={ [ styles.label, { color: color } ] }>
                {nearMines}
              </Text>
            )
            : false
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333'
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: '700',
    fontSize: params.fontSize,
  }
});

export default Field;
