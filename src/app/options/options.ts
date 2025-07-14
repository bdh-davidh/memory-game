import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GameState } from '../game-state.service';

@Component({
  selector: 'app-options',
  imports: [ReactiveFormsModule],
  templateUrl: './options.html',
  styleUrl: './options.css',
})
export class Options {
  private gameState = inject(GameState);

  optionsForm = new FormGroup({
    type: new FormControl(this.gameState.type),
    players: new FormControl(String(this.gameState.players)),
    grid: new FormControl(String(this.gameState.size)),
  });

  startGame() {
    this.gameState.type = this.optionsForm.value.type as 'icons' | 'numbers';
    this.gameState.players = Number(this.optionsForm.value.players) as
      | 1
      | 2
      | 3
      | 4;
    this.gameState.size = Number(this.optionsForm.value.grid) as 4 | 6;
    this.gameState.state = 'playing';
  }
}
