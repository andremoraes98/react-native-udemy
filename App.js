import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params';
import {
  createdBoardMined,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
} from './src/functions';
import MineField from './src/components/MineField';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      board: this.createState(),
      won: false,
      lost: false,
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

    return createdBoardMined(rows, columns, this.minesAmount())
  }

  onOpenField = (row, column) => {
    const { board } = this.state;
    const clonedBoard = cloneBoard(board);

    openField(clonedBoard, row, column);

    const lost = hadExplosion(clonedBoard);
    const won = wonGame(clonedBoard);

    if (lost) {
      showMines(clonedBoard);
      Alert.alert('Perdeu!');
    }

    if (won) {
      Alert.alert('Ganhou!')
    }

    this.setState({
      board: clonedBoard,
      lost,
      won,
    });
  }

  render() {
  
    const { board } = this.state;
  
    return (
      <View style={ styles.container }>
        <Text> {`O campo tem: ${params.getRowsAmount()} x ${params.getColumnsAmount()}`} </Text>
        <View style={styles.board}>
          <MineField
            board={ board }
            onOpenField={ this.onOpenField }
          />
        </View>
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
