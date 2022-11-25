
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavItem } from '../models/fav-item.model';

@Injectable({
  providedIn: 'root'
})
export class FavService{
  private items$ = new BehaviorSubject<FavItem[]>([]);

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
