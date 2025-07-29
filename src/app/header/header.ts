import { Component, inject, output } from '@angular/core';
import { GameState } from '../game-state.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  gameState = inject(GameState);
  newBoard = output<void>();

  reRenderBoard() {
    this.newBoard.emit();
    this.gameState.pairsFound = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
  }

  resetGame() {
    this.gameState.state = 'initial';
    this.gameState.pairsFound = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
  }
}
