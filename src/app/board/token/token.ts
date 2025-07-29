import { Component, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GameState } from '../../game-state.service';
import { GameLogic } from '../../game-logic.service';


@Component({
  selector: 'app-token',
  imports: [MatIcon],
  templateUrl: './token.html',
  styleUrl: './token.css',
})
export class Token {
  private gameState = inject(GameState);
  private gameLogic = inject(GameLogic);
  token = input.required<string>();
  index = input.required<string>();
  tokenType = this.gameState.type;

  get tokenState() {
    return this.gameState.game[Number(this.index())].tokenState;
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  get duration() {
    return `--duration: ${this.randomNumber(200, 800)}ms`;
  }

  get delay() {
    return `--delay: ${this.randomNumber(200, 800)}ms`;
  }


  handleClick() {
    // Handle the first guess
    if (!this.gameState.turn.firstGuess) {
      this.gameState.turn.firstGuess = this.index();
    } else {
    // Handle the second guess
      this.gameState.turn.secondGuess = this.index();
    }
    this.gameLogic.updateBoardState();
  }
}
