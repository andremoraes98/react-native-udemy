import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params';
import {
  createdBoardMined,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  toggleFlag,
  flagsUsed
} from './src/functions';
import MineField from './src/components/MineField';
import Header from './src/components/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = this.createState()
  }

  minesAmount = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return Math.ceil( rows * columns * params.difficultLevel );
  }

  createState = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return {
      board: createdBoardMined(rows, columns, this.minesAmount()),
      won: false,
      lost: false,
    };
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

  onSelectedField = (row, column) => {
    const { board } = this.state;
    const clonedBoard = cloneBoard(board);

    toggleFlag(clonedBoard, row, column);
    
    const won = wonGame(clonedBoard);

    if (won) {
      Alert.alert('Ganhou!')
    }

    this.setState({
      board: clonedBoard,
      won,
    });
  }

  render() {
  
    const { board } = this.state;
  
    return (
      <View style={ styles.container }>
        <Header
          flagsLeft={ this.minesAmount() - flagsUsed(board) }
          onNewGame={ () => this.setState(this.createState()) }
        />
        <View style={styles.board}>
          <MineField
            board={ board }
            onOpenField={ this.onOpenField }
            onSelectedField={ this.onSelectedField }
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
