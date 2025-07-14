import { Injectable } from '@angular/core';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root',
})
export class GameState {
  state: 'initial' | 'playing' | 'completed' = 'initial';

  type: 'icons' | 'numbers' = 'numbers';
  players: 1 | 2 | 3 | 4 = 1;
  size: 4 | 6 = 6;

  game: Token[] = [];

  turn = {
    firstGuess: '',
    secondGuess: '',
  };
}
