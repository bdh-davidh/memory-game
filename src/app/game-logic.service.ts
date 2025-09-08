import { Injectable, Output, Signal, inject } from '@angular/core';
import { GameState } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class GameLogic {
  gameState = inject(GameState);

  reRenderBoard(board: any) {
    board.emit();
    this.gameState.totalSeconds.set(0);
    this.gameState.isComplete = false;
    this.gameState.totalSeconds.set(0);
    this.gameState.pairsFound = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
    this.gameState.movesTaken = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
  }

  resetGame() {
    this.gameState.totalSeconds.set(0);
    this.gameState.state = 'initial';
    this.gameState.isComplete = false;
    this.gameState.totalSeconds.set(0);
    this.gameState.pairsFound = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
    this.gameState.movesTaken = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
  }

  tokenStatus(index: number, status: 'initial' | 'selected' | 'paired') {
    this.gameState.game[Number(index)].tokenState = status;
  }

  updateMatchesFound() {
    this.gameState.pairsFound[this.gameState.currentPlayer] += 1;
  }

  updateMovesTaken() {
    this.gameState.movesTaken[this.gameState.currentPlayer] += 1;
  }

  updateCurrentPlayer() {
    this.gameState.currentPlayer += 1;
    if (this.gameState.currentPlayer > this.gameState.players) {
      this.gameState.currentPlayer = 1;
    }
  }

  checkGameCompleted() {
    return this.gameState.game.every((token) => token.tokenState === 'paired');
  }

  updateBoardState() {
    const firstIndex = Number(this.gameState.turn.firstGuess);
    const secondIndex = Number(this.gameState.turn.secondGuess);
    const firstIcon = this.gameState.game[Number(firstIndex)];
    const secondIcon = this.gameState.game[Number(secondIndex)];

    // If it's the first selection, set the selected status
    if (!this.gameState.turn.secondGuess) {
      this.tokenStatus(firstIndex, 'selected');
    } else {
      this.tokenStatus(secondIndex, 'selected');
    }

    // If it's the second selection
    if (this.gameState.turn.secondGuess) {
      // Check for a match
      if (firstIcon.token === secondIcon.token) {
        // If it's a match set the state
        this.tokenStatus(firstIndex, 'paired');
        this.tokenStatus(secondIndex, 'paired');
        // Increase the player's score
        this.updateMatchesFound();
        // Check if the game is over
        if (this.checkGameCompleted()) {
          this.gameState.isComplete = true;
          this.gameState.stopTimer();
        }
      } else {
        // Stop additional clicks
        document.body.setAttribute('inert', '');
        // No match, so reset the state after a moment memorise the icons
        setTimeout(() => {
          this.tokenStatus(firstIndex, 'initial');
          this.tokenStatus(secondIndex, 'initial');
          document.body.removeAttribute('inert');
          console.log('CLEARS');
        }, 1000);
      }
      // Clear the attempts after the second turn
      this.gameState.turn.firstGuess = '';
      this.gameState.turn.secondGuess = '';
      // Register move taken
      this.updateMovesTaken();
      // Move to the next player
      this.updateCurrentPlayer();
    }
  }
}
