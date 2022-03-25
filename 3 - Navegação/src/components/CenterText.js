import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CenterText extends Component {
  render() {
    const { children, bgColor, textColor } = this.props;
    return (
      <View style={ [styles.container, { backgroundColor: bgColor || '#000' }] }>
        <Text
          style={ [styles.text, { color: textColor || '#FFF' }] }
        >
          { children }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  }
});

export default CenterText;
