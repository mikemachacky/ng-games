import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {
  tiles:string[][] = [
    ['','',''],
    ['','',''],
    ['','',''],
  ];
  whoPlaysNow:string = "O";

  currentPlayer(){
    if(this.whoPlaysNow=="O")
    return "X";
    else
    return"O";
  }

  newGamePressed():void{
    this.tiles =  [
      ['','',''],
      ['','',''],
      ['','',''],
    ];
  this.whoPlaysNow = "O";
  }

  cellClikced(rowIndex:number,colIndex:number):void{
    if(this.tiles[rowIndex][colIndex]==''){
      this.tiles[rowIndex][colIndex]=this.whoPlaysNow;
      this.whoPlaysNow = this.currentPlayer();
    }

  }
}
