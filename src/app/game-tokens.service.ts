import { Injectable, inject } from '@angular/core';
import { GameState } from './game-state.service';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root',
})
export class GameIcons {
  gameState = inject(GameState);

  iconArray: Token[] = [
    { token: 'flight', tokenState: 'initial' },
    { token: 'train', tokenState: 'initial' },
    { token: 'directions_boat', tokenState: 'initial' },
    { token: 'pedal_bike', tokenState: 'initial' },
    { token: 'icecream', tokenState: 'initial' },
    { token: 'tram', tokenState: 'initial' },
    { token: 'favorite', tokenState: 'initial' },
    { token: 'face', tokenState: 'initial' },
    { token: 'pets', tokenState: 'initial' },
    { token: 'emoji_objects', tokenState: 'initial' },
    { token: 'local_shipping', tokenState: 'initial' },
    { token: 'hotel', tokenState: 'initial' },
    { token: 'android', tokenState: 'initial' },
    { token: 'rowing', tokenState: 'initial' },
    { token: 'thumb_up_alt', tokenState: 'initial' },
    { token: 'work', tokenState: 'initial' },
    { token: 'beach_access', tokenState: 'initial' },
    { token: 'spa', tokenState: 'initial' },
  ];

  numberArray: Token[] = [
    { token: '1', tokenState: 'initial' },
    { token: '2', tokenState: 'initial' },
    { token: '3', tokenState: 'initial' },
    { token: '4', tokenState: 'initial' },
    { token: '5', tokenState: 'initial' },
    { token: '6', tokenState: 'initial' },
    { token: '7', tokenState: 'initial' },
    { token: '8', tokenState: 'initial' },
    { token: '9', tokenState: 'initial' },
    { token: '10', tokenState: 'initial' },
    { token: '11', tokenState: 'initial' },
    { token: '12', tokenState: 'initial' },
    { token: '13', tokenState: 'initial' },
    { token: '14', tokenState: 'initial' },
    { token: '15', tokenState: 'initial' },
    { token: '16', tokenState: 'initial' },
    { token: '17', tokenState: 'initial' },
    { token: '18', tokenState: 'initial' },
  ];
}
