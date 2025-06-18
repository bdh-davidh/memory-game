import { Injectable } from '@angular/core';
import {
  PhAirplane,
  PhAppleLogo,
  PhBeerStein,
  PhBoat,
  PhCake,
  PhCarSimple,
  PhCat,
  PhCarrot,
  PhCoffee,
  PhCrownSimple,
  PhDog,
  PhFishSimple,
  PhFootball,
  PhGhost,
  PhGuitar,
  PhLeaf,
  PhSmiley,
  PhMusicNote,
} from '@ng-icons/phosphor-icons';

@Injectable({
  providedIn: 'root'
})
export class GameIcons {
   tokenArray = [
    PhAirplane,
    PhAppleLogo,
    PhBeerStein,
    PhBoat,
    PhCake,
    PhCarSimple,
    PhCat,
    PhCarrot,
    PhCoffee,
    PhCrownSimple,
    PhDog,
    PhFishSimple,
    PhFootball,
    PhGhost,
    PhGuitar,
    PhLeaf,
    PhSmiley,
    PhMusicNote
  ]
}
