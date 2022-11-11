import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Juego } from 'src/app/models/juegos.model';

@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.component.html',
  styleUrls: ['./juego-card.component.scss'],
})
export class JuegoCardComponent {
  @Input() item: Juego;

  @Output() clicked = new EventEmitter();
}
