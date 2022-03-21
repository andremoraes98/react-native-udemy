import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class PassoStack extends Component {
  render() {
    const { children, advance, back } = this.props;
    return (
      <View style={ styles.container }>
        <View style={ styles.buttons }>
          { back
              ? <Button
                  title='Voltar'
                  onPress={ () => {
                    this.props.navigation.goBack()
                  }}
                />
              : false
          }
          { advance 
              ? <Button
                  title='Avançar'
                  onPress={ () => {
                    this.props.navigation.navigate(advance)
                  }}
                />
              : false
          }
        </View>
        <View style={ styles.container }>
          { children }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default PassoStack;
