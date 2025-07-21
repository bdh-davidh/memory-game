import { Component, inject, input } from '@angular/core';
import { Board } from "./board/board";
import { Options } from './options/options';
import { GameState } from './game-state.service';
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [Board, Options, Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  gameState = inject(GameState);
  renderBoard = false;

  onBoardRendered() {
    this.renderBoard = false;
  }

  restartGame() {
    this.renderBoard = true;
  }
}
