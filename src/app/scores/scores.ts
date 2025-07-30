import { Component, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GameState } from '../game-state.service';

@Component({
  selector: 'app-scores',
  imports: [],
  templateUrl: './scores.html',
  styleUrl: './scores.css',
})
export class Scores {
  gameState = inject(GameState);

  totalSeconds = signal(0);
  seconds = computed(() => this.totalSeconds() % 60);
  minutes = computed(() => Math.floor(this.totalSeconds() / 60));

  timeTaken = setInterval(() => {
    this.totalSeconds.update((value) => (value += 1));
  }, 1000);

  getValue(
    valueRequired: 'movesTaken' | 'pairsFound',
    playerIndex: number,
  ): number {
    return (this.gameState[valueRequired] as any)[playerIndex + 1];
  }
}
