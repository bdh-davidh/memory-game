import { Component, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GameStateService } from '../../game-state.service';
import { GameLogic } from '../../game-logic.service';
import { GameIcons } from '../../game-icons.service';

@Component({
  selector: 'app-icon',
  imports: [MatIcon],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  icon = input.required<string>();
  index = input.required<string>();
  private gameState = inject(GameStateService);
  private gameLogic = inject(GameLogic);
  gameIcons = inject(GameIcons);

  get iconState() {
    return this.gameState.currentGame[Number(this.index())].iconState;
  }

  handleClick() {
    // Update the icons selected
    if (!this.gameState.currentTurn.firstGuess) {
      this.gameState.currentTurn.firstGuess = this.index();
    } else {
      this.gameState.currentTurn.secondGuess = this.index();
    }
    this.gameLogic.updateBoardState();
  }
}
