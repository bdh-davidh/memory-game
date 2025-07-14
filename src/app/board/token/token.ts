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

  get delay() {
    return `--delay: ${Number(this.index()) * 50}ms`;
  }

  handleClick() {
    // Update the icons selected
    if (!this.gameState.turn.firstGuess) {
      this.gameState.turn.firstGuess = this.index();
    } else {
      this.gameState.turn.secondGuess = this.index();
    }
    this.gameLogic.updateBoardState();
  }
}
