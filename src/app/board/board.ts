import { Component, inject, OnInit } from '@angular/core';
import { Token } from './token/token';
import { GameTokens } from '../game-tokens.service';
import { GameState } from '../game-state.service';

@Component({
  selector: 'app-board',
  imports: [Token],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board implements OnInit {
  private gameTokens = inject(GameTokens);
  private gameState = inject(GameState);
  arrayToRender = this.gameTokens[this.gameState.type];
  gridSize = this.gameState.size;

  renderBoard() {
    const gameSize = this.gameState.size * (this.gridSize / 2);
    const currentGame = (this.gameState.game = this.arrayToRender
      .slice(0, gameSize)
      .map((item) => [item, item])
      .flat()
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => ({ ...value })));
    return currentGame;
  }

  ngOnInit() {
    this.renderBoard();
  }

  get iconArray() {
    return this.gameState.game;
  }
}
