import { Injectable, signal } from '@angular/core';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root',
})
export class GameState {
  state: 'initial' | 'playing' = 'initial';
  isComplete: boolean = false;

  type: 'icons' | 'numbers' = 'numbers';
  players: 1 | 2 | 3 | 4 = 2;
  size: 4 | 6 = 6;

  game: Token[] = [];

  currentPlayer: 1 | 2 | 3 | 4 = 1;

  pairsFound = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };

  movesTaken = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };

  turn = {
    firstGuess: '',
    secondGuess: '',
  };

  totalSeconds = signal(0);

  timerID: ReturnType<typeof setInterval> | undefined;

  startTimer() {
    console.log('FIRES');
    this.stopTimer();
    this.timerID = setInterval(() => {
      this.totalSeconds.update((value) => (value += 1));
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerID);
  }
}
