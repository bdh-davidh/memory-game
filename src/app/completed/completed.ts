import { Component, inject, output } from '@angular/core';
import { GameState } from '../game-state.service';
import { GameLogic } from '../game-logic.service';

@Component({
  selector: 'app-completed',
  imports: [],
  templateUrl: './completed.html',
  styleUrl: './completed.css',
})
export class Completed {
  gameState = inject(GameState);
  gameLogic = inject(GameLogic);
  newBoard = output<void>();

  seconds = this.gameState.totalSeconds() % 60;
  minutes = Math.floor(this.gameState.totalSeconds() / 60);

  get rankedScores() {
   return Object.entries(this.gameState.pairsFound)
    .sort((a, b) => b[1] - a[1])
    .slice(0, this.gameState.players);
  }

  gameWinner() {
    const scores = this.rankedScores;
    if (scores[0][1] !== scores[1][1]) {
      return `Player ${scores[0][0]} wins!`;
    } else {
      return `It's a tie!`
    }
  }

  reRenderBoard() {
    this.gameLogic.reRenderBoard(this.newBoard);
  }

  resetGame() {
    this.gameLogic.resetGame();
  }
}
