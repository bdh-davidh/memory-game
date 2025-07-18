import { Component, inject } from '@angular/core';
import { Board } from "./board/board";
import { Options } from './options/options';
import { GameState } from './game-state.service';



@Component({
  selector: 'app-root',
  imports: [Board, Options],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  gameState = inject(GameState);
}
