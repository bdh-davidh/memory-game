import { Injectable } from '@angular/core';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root',
})
export class GameState {
  options = [
    { type: ['icons', 'numbers'] },
    { players: [1, 2, 3, 4] },
    { grid: [4, 6] },
  ];

  size: 4 | 6 = 6;

  state: 'initial' | 'playing' | 'completed' = 'initial';

  game: Token[] = [];

  turn = {
    firstGuess: '',
    secondGuess: '',
  };
}
