import { Injectable, inject } from '@angular/core';
import { GameStateService } from './game-state.service';
import { Icon } from './icon.model';

@Injectable({
  providedIn: 'root',
})
export class GameIcons {
  gameState = inject(GameStateService);

  iconArray: Icon[] = [
    { icon: 'flight', iconState: 'initial' },
    { icon: 'train', iconState: 'initial' },
    { icon: 'directions_boat', iconState: 'initial' },
    { icon: 'pedal_bike', iconState: 'initial' },
    { icon: 'icecream', iconState: 'initial' },
    { icon: 'tram', iconState: 'initial' },
    { icon: 'favorite', iconState: 'initial' },
    { icon: 'face', iconState: 'initial' },
    { icon: 'pets', iconState: 'initial' },
    { icon: 'emoji_objects', iconState: 'initial' },
    { icon: 'local_shipping', iconState: 'initial' },
    { icon: 'hotel', iconState: 'initial' },
    { icon: 'android', iconState: 'initial' },
    { icon: 'rowing', iconState: 'initial' },
    { icon: 'thumb_up_alt', iconState: 'initial' },
    { icon: 'work', iconState: 'initial' },
    { icon: 'beach_access', iconState: 'initial' },
    { icon: 'spa', iconState: 'initial' },
  ];
}
