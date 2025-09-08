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

  getScores(index: number) {
    return this.gameState.pairsFound[
      (index + 1) as keyof typeof this.gameState.pairsFound
    ];
  }

  reRenderBoard() {
    this.gameLogic.reRenderBoard(this.newBoard);
  }

  resetGame() {
    this.gameLogic.resetGame();
  }
}
