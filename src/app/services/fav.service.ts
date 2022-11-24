
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavItem } from '../models/fav-item.model';

@Injectable({
  providedIn: 'root'
})
export class FavService{
  private items$ = new BehaviorSubject<FavItem[]>([
    {
      id: 1,
      name: 'Grand theft auto 5',
      price: 899,
      image: 'assets/juegos/gta5.jpg',
      quantity: 1,
    },
  ]);

  getFav() {
    return this.items$.asObservable();
  }

  addToFav(newItem: FavItem) {
    this.items$.next([...this.items$.getValue(), newItem]);
  }

  removeItem(id: number) {
    this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
  }
}
