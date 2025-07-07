import { Injectable } from '@angular/core';
import { Icon } from './icon.model';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  gameOptions = [
    { theme: ['number', 'icon'] },
    { players: [1, 2] },
    { grid: [4, 6] },
  ];

  gameSize: 4 | 6 = 6;

  currentGame: Icon[] = [];

  currentTurn = {
    firstGuess: '',
    secondGuess: '',
  };
}
