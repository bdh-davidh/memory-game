import { Component } from '@angular/core';
import { Board } from "./board/board";


@Component({
  selector: 'app-root',
  imports: [Board],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {}
