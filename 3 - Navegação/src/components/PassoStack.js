import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class PassoStack extends Component {
  render() {
    const { children, advance } = this.props;
    console.log(children, advance);
    return (
      <View style={ styles.container }>
        <View>
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
  }
});

export default PassoStack;
