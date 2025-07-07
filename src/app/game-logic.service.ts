import { Injectable, inject } from '@angular/core';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class GameLogic {
  gameState = inject(GameStateService);

  iconStatus(index: number, status: 'initial' | 'selected' | 'paired') {
    this.gameState.currentGame[Number(index)].iconState = status;
  }

  updateBoardState() {
    const firstIndex = Number(this.gameState.currentTurn.firstGuess);
    const secondIndex = Number(this.gameState.currentTurn.secondGuess);
    const firstIcon = this.gameState.currentGame[Number(firstIndex)];
    const secondIcon = this.gameState.currentGame[Number(secondIndex)];

    // If it's the first selection, set the selected status
    if (!this.gameState.currentTurn.secondGuess) {
      this.iconStatus(firstIndex, 'selected');
    } else {
      this.iconStatus(secondIndex, 'selected');
    }

    // If it's the second selection
    if (this.gameState.currentTurn.secondGuess) {
      // Check for a match
      if (firstIcon.icon === secondIcon.icon) {
        // If it's a match set the state
        this.iconStatus(firstIndex, 'paired');
        this.iconStatus(secondIndex, 'paired');
      } else {
        // No match, so reset the state
        setTimeout(() => {
          this.iconStatus(firstIndex, 'initial');
          this.iconStatus(secondIndex, 'initial');
        }, 1000);
      }
      // Clear the turn after the second turn
      this.gameState.currentTurn.firstGuess = '';
      this.gameState.currentTurn.secondGuess = '';
    }
  }
}
