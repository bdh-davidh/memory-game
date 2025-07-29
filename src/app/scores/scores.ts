import { Component, inject } from '@angular/core';
import { GameState } from '../game-state.service';

@Component({
  selector: 'app-scores',
  imports: [],
  templateUrl: './scores.html',
  styleUrl: './scores.css',
})
export class Scores {
  gameState = inject(GameState);

  getPairsFound(playerIndex: number): number {
    return (this.gameState.pairsFound as any)[playerIndex + 1];
  }
}
