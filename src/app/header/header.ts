import { Component, inject, output } from '@angular/core';
import { GameState } from '../game-state.service';
import { GameLogic } from '../game-logic.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  gameState = inject(GameState);
  gameLogic = inject(GameLogic);
  newBoard = output<void>();

  reRenderBoard() {
    this.gameLogic.reRenderBoard(this.newBoard);
  }

  resetGame() {
    this.gameLogic.resetGame()
  }
}
