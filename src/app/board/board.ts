import { Component, inject, OnInit } from '@angular/core';
import { Icon } from './icon/icon'
import { GameIcons } from '../game-icons.service';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-board',
  imports: [Icon],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board implements OnInit {
  gameIcons = inject(GameIcons);
  gameState = inject(GameStateService);

  renderBoard() {
    const gameSize = this.gameState.gameSize * 3;
    const currentGame = (this.gameState.currentGame = this.gameIcons.iconArray
      .slice(0, gameSize)
      .map((item) => [item, item])
      .flat()
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => ({...value})));
    return currentGame;
  }

  ngOnInit() {
    this.renderBoard()
  }

  get iconArray() {
    return this.gameState.currentGame
  }
}
