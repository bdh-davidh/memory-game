import { Component, inject } from '@angular/core';
import { GameState } from './game-state.service';
import { Board } from "./board/board";
import { Options } from './options/options';
import { Header } from "./header/header";
import { Scores } from './scores/scores';
import { Completed } from './completed/completed';



@Component({
  selector: 'app-root',
  imports: [Board, Options, Header, Scores, Completed],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  gameState = inject(GameState);
  newBoard = false;

  resetNewBoard() {
    this.newBoard = false;
  }

  reRenderBoard() {
    this.newBoard = true;
  }
}
