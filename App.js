import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import createdMinedBoard from './src/functions';
import MineField from './src/components/MineField';
import Field from './src/components/Field';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      board: this.createState(),
    }
  }

  minesAmount = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return Math.ceil( rows * columns * params.difficultLevel );
  }

  createState = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return createdMinedBoard(rows, columns, this.minesAmount())
  }

  render() {
  
    const { board } = this.state;
  
    return (
      <View style={ styles.board }>
        <Text> {`O campo tem: ${params.getRowsAmount()} x ${params.getColumnsAmount()}`} </Text>
        <MineField board={ board } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
