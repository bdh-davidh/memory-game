import { Component, inject, signal, computed } from '@angular/core';
import { GameState } from '../game-state.service';

@Component({
  selector: 'app-scores',
  imports: [],
  templateUrl: './scores.html',
  styleUrl: './scores.css',
})
export class Scores {
  gameState = inject(GameState);
  seconds = computed(() => this.gameState.totalSeconds() % 60);
  minutes = computed(() => Math.floor(this.gameState.totalSeconds() / 60));

  getValue(
    valueRequired: 'movesTaken' | 'pairsFound',
    playerIndex: number,
  ): number {
    return (this.gameState[valueRequired] as any)[playerIndex + 1];
  }
}
