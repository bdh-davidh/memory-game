import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  gameOptions = [
    { theme: ['number', 'icon'] },
    { players: [1, 2, 3, 4] },
    { grid: [4, 6] },
  ];
}
