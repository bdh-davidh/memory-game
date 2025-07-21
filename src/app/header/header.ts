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
  restartGame = output<void>();

  restartCurrentGame() {
    this.restartGame.emit();
  }

  resetGame() {
    this.gameState.state = 'initial';
  }
}
