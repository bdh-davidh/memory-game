import { Component, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GameState } from '../../game-state.service';
import { GameLogic } from '../../game-logic.service';
import { GameIcons } from '../../game-tokens.service';

@Component({
  selector: 'app-icon',
  imports: [MatIcon],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  icon = input.required<string>();
  index = input.required<string>();
  private gameState = inject(GameState);
  private gameLogic = inject(GameLogic);
  gameIcons = inject(GameIcons);

  get iconState() {
    return this.gameState.game[Number(this.index())].tokenState;
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
