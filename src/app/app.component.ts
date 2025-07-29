import { Component, inject } from '@angular/core';
import { Board } from "./board/board";
import { Options } from './options/options';
import { GameState } from './game-state.service';
import { Header } from "./header/header";
import { Scores } from './scores/scores';



@Component({
  selector: 'app-root',
  imports: [Board, Options, Header, Scores],
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
