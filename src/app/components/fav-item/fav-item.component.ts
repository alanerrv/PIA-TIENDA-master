import { FavItem } from './../../models/fav-item.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fav-item',
  templateUrl: './fav-item.component.html',
  styleUrls: ['./fav-item.component.scss'],
})
export class FavItemComponent{
  @Input() item: FavItem;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();


}
