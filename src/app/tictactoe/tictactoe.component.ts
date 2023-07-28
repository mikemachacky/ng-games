import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {
  tiles: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  whoPlaysNow: string = 'O';
  movesCounter: number = 0;
  winner: string = '';
  isDraw: boolean = false;

  currentPlayer(): string {
    return this.whoPlaysNow === 'O' ? 'X' : 'O';
  }

  newGamePressed(): void {
    this.tiles = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.whoPlaysNow = 'O';
    this.movesCounter = 0;
    this.winner = '';
    this.isDraw = false;
  }

  cellClicked(rowIndex: number, colIndex: number): void {
    if (this.tiles[rowIndex][colIndex] === '' && !this.winner) {
      this.tiles[rowIndex][colIndex] = this.whoPlaysNow;
      this.movesCounter++;
      if (this.checkGameStatus(rowIndex, colIndex)) {
        this.winner = this.whoPlaysNow;
      } else if (this.movesCounter === 9) {
        this.isDraw = true;
      } else {
        this.whoPlaysNow = this.currentPlayer();
      }
    }
  }

  checkGameStatus(rowIndex: number, colIndex: number): boolean {
    const player = this.tiles[rowIndex][colIndex];
    if (
      this.tiles[rowIndex][0] === player &&
      this.tiles[rowIndex][1] === player &&
      this.tiles[rowIndex][2] === player
    ) {
      return true;
    }
    if (
      this.tiles[0][colIndex] === player &&
      this.tiles[1][colIndex] === player &&
      this.tiles[2][colIndex] === player
    ) {
      return true;
    }
    if (
      (this.tiles[0][0] === player &&
        this.tiles[1][1] === player &&
        this.tiles[2][2] === player) ||
      (this.tiles[0][2] === player &&
        this.tiles[1][1] === player &&
        this.tiles[2][0] === player)
    ) {
      return true;
    }
    return false;
  }
}
